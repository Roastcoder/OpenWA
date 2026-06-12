import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { SessionService } from '../session/session.service';

@ApiTags('chats')
@Controller('sessions/:sessionId/chats')
export class ChatController {
  constructor(private readonly sessionService: SessionService) {}

  private getEngine(sessionId: string) {
    const engine = this.sessionService.getEngine(sessionId);
    if (!engine) {
      throw new NotFoundException('Session is not started');
    }
    return engine;
  }

  @Get()
  @ApiOperation({ summary: 'Get all active chats (conversations) for a session' })
  @ApiParam({ name: 'sessionId', description: 'Session ID' })
  @ApiResponse({
    status: 200,
    description: 'List of active chats',
  })
  @ApiResponse({ status: 400, description: 'Session not ready' })
  @ApiResponse({ status: 404, description: 'Session not found' })
  async getChats(@Param('sessionId') sessionId: string) {
    const engine = this.getEngine(sessionId);
    return engine.getChats();
  }
}
