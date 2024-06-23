import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { Usuario } from './usuario/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // o el tipo de base de datos que estés usando
      host: 'localhost',
      port: 3306,
      username: 'tu_usuario',
      password: 'tu_contraseña',
      database: 'tu_base_de_datos',
      entities: [Usuario],
      synchronize: true,
    })
    UsuarioModule,
  ]
})
export class AppModule {}
