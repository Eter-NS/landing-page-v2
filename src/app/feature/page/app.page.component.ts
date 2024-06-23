import { AsyncPipe } from '@angular/common'
import {
    Component,
    DestroyRef,
    HostBinding,
    OnInit,
    afterNextRender,
    inject,
} from '@angular/core'
import { ViewCenterDirective } from '../../utils/view-center/view-center.directive'
import { HeaderComponent } from '../../ui/header/header.component'
import { HeroSectionComponent } from '../../ui/hero-section/hero-section.component'
import { AboutMeSectionComponent } from '../../ui/about-me-section/about-me-section.component'
import { TechStackSectionComponent } from '../../ui/tech-stack-section/tech-stack-section.component'
import { ContactMeFormComponent } from '../../ui/contact-me-form/contact-me-form.component'
import { FooterComponent } from '../../ui/footer/footer.component'
import { ThemeService } from '../../../shared/data-access/theme/theme.service'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        AsyncPipe,
        ViewCenterDirective,
        HeaderComponent,
        HeroSectionComponent,
        AboutMeSectionComponent,
        TechStackSectionComponent,
        ContactMeFormComponent,
        FooterComponent,
    ],
    templateUrl: './app.page.component.html',
    styleUrl: './app.page.component.scss',
})
export class AppComponent {
    private _themeService = inject(ThemeService)
    private destroyRef = inject(DestroyRef)

    @HostBinding('class') _classes = ''

    constructor() {
        this._themeService?.appTheme$
            .pipe(takeUntilDestroyed())
            .subscribe((theme) => {
                console.log(theme)

                this._classes = theme
            })
    }
}
