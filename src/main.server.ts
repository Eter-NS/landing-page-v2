import { bootstrapApplication } from '@angular/platform-browser'
import { AppComponent } from './app/feature/page/app.page.component'
import { config } from './app.config.server'

const bootstrap = () => bootstrapApplication(AppComponent, config)

export default bootstrap
