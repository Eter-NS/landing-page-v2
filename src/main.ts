import { bootstrapApplication } from '@angular/platform-browser'
import { appConfig } from './app.config'
import { AppComponent } from './app/feature/page/app.page.component'

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err))
