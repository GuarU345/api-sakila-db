import { prisma } from '../libs/prisma.js'
import { CrudService } from '../utils/service.js'
import nodemailer from 'nodemailer'
import argon2 from 'argon2'

export class StaffService extends CrudService {
    constructor() {
        super(prisma.staff,prisma.staff.fields.staff_id.name)
    }

    async signin(staff){
        try {
            const { email, password } = staff;
        
            const isRegister = await prisma.staff.findUnique({
              where: {
                email: email,
              },
              include: {
                tokens: true,
              },
            });
        
            if (!isRegister || !(await argon2.verify(isRegister.password, password))) {
              throw new Error("Credenciales Invalidas");
            }
        
            await this.generateCode(isRegister);
            return isRegister;
          } catch (error) {
              console.error(error);
              throw new Error("No se ha podido iniciar sesion");
          }
    }

    sendEmail(staffEmail,code) {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
    
        const mailOptions = {
            from: '"Mi App"',
            to: staffEmail,
            subject: 'Codigo de verificacion',
            text: `Tu codigo de verificacion es ${code}`,
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error al enviar el correo:', error);
            } else {
                console.log('Correo enviado:', info.response);
            }
        });
    }

   async generateCode(staff) {
        try {
            await prisma.staff.update({
                where: {
                    staff_id: staff.staff_id,
                },
                data: {
                    code: null,
                },
            })

            const code = Math.floor(100000 + Math.random() * 900000).toString().slice(0, 6);
            const staffId = staff.staff_id;
        
            await prisma.staff.update({
                where: {
                    staff_id: staffId,
                },
                data: {
                    code: argon2.hash(code),
                },
            });
        
            this.sendEmail(staff.email, code);
          } catch (error) {
            console.error(error);
            throw new Error("No se ha podido generar el codigo");
          }
    }

    async verifyCode(staff, code) {
        const { staff_id } = staff;

        const findStaff = await prisma.staff.findUnique({
            where: {
                staff_id: staff_id,
            },
        });

        if(!staff.code) {
            throw new Error("No hay un codigo activo");
        }

        const isValidCode = await argon2.verify(findStaff.code, code);
        if (!isValidCode) {
            throw new Error("Codigo invalido");
        }

        const token = await generateToken()

        return {
            token,
            findStaff
        }
    }

    async generateToken(staff) {
        const tokenIds = isRegister.tokens.map((token) => token.id);

        const findStaff = await prisma.staff.findUnique({
            where: {
                staff_id: staff.staff_id,
            },
            include: {
                tokens: true,
            },
        });
        
        if (tokenIds.length > 0) {
            await prisma.token.delete({
            where: {
                id: tokenIds[0],
            },
            });
        }
    
        const secretKey = process.env.JWT_KEY || "";
    
        const token = jwt.sign(
            { id: findStaff.staff_id, email: findStaff.email },
            secretKey
        );
    
        const newToken = await prisma.token.create({
            data: {
            jwtSecretKey: token,
            staff_id: findStaff.id,
            },
        });

        return newToken
    }

}
