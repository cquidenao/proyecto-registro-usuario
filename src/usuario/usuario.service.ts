import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const usuario = new Usuario();
    usuario.nombre = createUsuarioDto.nombre;
    usuario.email = createUsuarioDto.email;
    usuario.password = createUsuarioDto.password;
    return this.usuarioRepository.save(usuario);
  }
},
