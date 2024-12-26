import { AppRoutingModule } from "./app-routing.modules";

@Module({
  imports: [
    RouterModule.register(GobbalRoutes),
    // AppRoutingModule.forRootAsync({ fileExtension: 'routes.js' }),
  ],
})
export class AppModule {}
