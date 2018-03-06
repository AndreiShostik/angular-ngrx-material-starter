import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';

import {
  ActionConsentsSelectAll,
  selectorUserConsents,
  UserConsentsModel,
} from '../user-consents.reducer';


const NAME_MAX_LENGTH = 50;

@Component({
  selector: 'di-consents-list',
  templateUrl: './consents-list.component.html',
  styleUrls: ['./consents-list.component.scss'],
})
export class ConsentsListComponent implements OnInit, OnDestroy, AfterViewInit {

  private unsubscribe$: Subject<void> = new Subject<void>();
  public displayedColumns = ['name', 'email', 'consents'];
  public dataSource: MatTableDataSource<UserConsentsModel>;

  @ViewChild(MatPaginator) public paginator: MatPaginator;


  constructor(private store: Store<any>) {

  }

  public ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  public ngOnInit() {
    this.store
      .select(selectorUserConsents)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(({ items }) => {
        this.dataSource = new MatTableDataSource<UserConsentsModel>(items);
        this.store.dispatch(new ActionConsentsSelectAll({ userConsents: items }));
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
