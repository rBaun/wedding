import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, finalize, Observable } from 'rxjs';

/**
 * Flag "loading" state on HTTP requests.
 * Use {@link LoaderService.$loading} to subscribe to loading state changes
 * @emits {@link LoaderService.startLoading} when request starts
 * @emits {@link LoaderService.stopLoading} when request ends
 */
export const loadingInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const loaderService = inject(LoadingService);
  loaderService.startLoading();

  return next(request).pipe(
    finalize(() => {
      loaderService.stopLoading();
    })
  );
};

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingCount = 0;

  private loading$ = new BehaviorSubject<boolean>(false);
  public $loading = this.loading$.asObservable();

  constructor() {}

  public isLoading = (): boolean => this.loadingCount > 0;

  public startLoading = (): void => {
    this.loadingCount++;
    if (this.loadingCount === 1) {
      this.loading$.next(true);
      console.log('Loading started', this.loadingCount);
    }
  };

  public stopLoading = (): void => {
    this.loadingCount = Math.max(0, this.loadingCount - 1);
    if (this.loadingCount === 0) {
      this.loading$.next(false);
      console.log('Loading stopped', this.loadingCount);
    }
  };
}
