import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigurableModuleClass } from './config.module-definition';

@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule extends ConfigurableModuleClass {
  // static register(options: Record<string, any>): DynamicModule {
  //   return {
  //     module: ConfigModule,
  //     providers: [
  //       { provide: 'CONFIG_OPTIONS', useValue: options },
  //       ConfigService,
  //     ],
  //     exports: [ConfigService],
  //   };
  // }
}
