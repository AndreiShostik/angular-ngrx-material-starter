import { Title } from '@angular/platform-browser';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { filter } from 'rxjs/operators/filter';

import { routerTransition } from '@app/core';
import { environment as env } from '@env/environment';

import { NIGHT_MODE_THEME, selectorSettings } from './settings';


@Component({
    selector: 'di-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss'],
    animations: [routerTransition]
})
export class PagesComponent implements OnInit, OnDestroy {
    private unsubscribe$: Subject<void> = new Subject<void>();

    @ViewChild('sidenav') menuSidenav;
    @HostBinding('class') componentCssClass;

    public isMobileView: boolean;

    isProd = env.production;
    envName = env.envName;
    version = env.versions.app;
    year = new Date().getFullYear();
    logo = require('../../assets/logo.png');
    navigation = [
        // { link: '/about', label: 'About' },
        { link: '/consents/list', label: 'Consents' },
        { link: '/consents/give-consent', label: 'Give consent' },
    ];
    navigationSideMenu = [
        ...this.navigation,
        // { link: '/settings', label: 'Settings' }
    ];
    isAuthenticated;

    constructor(public overlayContainer: OverlayContainer,
        private store: Store<any>,
        private router: Router,
        private titleService: Title,
        private media: ObservableMedia) {
    }

    ngOnInit(): void {
        this.isMobileView = (this.media.isActive('xs') || this.media.isActive('sm'));

        this.media.asObservable()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((change: MediaChange) => {
                this.isMobileView = (change.mqAlias === 'xs' || change.mqAlias === 'sm');
            }
            );

        this.router.events
            .pipe(
                takeUntil(this.unsubscribe$),
                filter(event => event instanceof ActivationEnd)
            )
            .subscribe((event: ActivationEnd) => {
                let lastChild = event.snapshot;
                while (lastChild.children.length) {
                    lastChild = lastChild.children[0];
                }
                const { title } = lastChild.data;
                this.titleService.setTitle(
                    title ? `${title} - ${env.appName}` : env.appName
                );
            });

        this.store
            .select(selectorSettings)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(settings => {
                const { theme, autoNightMode } = settings;
                const hours = new Date().getHours();
                const effectiveTheme = (autoNightMode && (hours >= 20 || hours <= 6)
                    ? NIGHT_MODE_THEME
                    : theme
                ).toLowerCase();
                this.componentCssClass = effectiveTheme;
                const classList = this.overlayContainer.getContainerElement().classList;
                const toRemove = Array.from(classList).filter((item: string) =>
                    item.includes('-theme')
                );
                classList.remove(...toRemove);
                classList.add(effectiveTheme);
            });
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    onLinkClick(): void {
        if (this.isMobileView) {
            this.menuSidenav.close();
        }
    }
}
