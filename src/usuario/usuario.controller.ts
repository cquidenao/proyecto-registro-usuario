import { Controller, Post, Body } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from './usuario.entity';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('registro')
  async create(@Body() createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    return this.usuarioService.create(createUsuarioDto);
  }
},
