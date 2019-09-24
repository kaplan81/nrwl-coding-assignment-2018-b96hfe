import { NgModule, Optional, SkipSelf } from '@angular/core';

/**
 * CoreModule will mainly be in charge of implementing injection tokens such as:
 * APP_INITIALIZER for our configuration file. For example:
 *
 * export function appInitializerFactory(configService: ConfigService): Function {
 *   return () => configService.loadConfig().toPromise();
 * }
 *
 * @NgModule({
 *  providers: [
 *    {
 *      provide: APP_INITIALIZER,
 *      useFactory: appInitializerFactory,
 *      deps: [ConfigService],
 *       multi: true
 *    }
 *  ],
 *  imports: [ConfigFileModule]
 * })
 * export class CoreModule {}
 *
 *
 * HTTP_INTERCEPTORS will also belong to this module.
 */
@NgModule({
  providers: [],
  imports: []
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    // Prevent reimport of the CoreModule.
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule ONLY');
    }
  }
}
