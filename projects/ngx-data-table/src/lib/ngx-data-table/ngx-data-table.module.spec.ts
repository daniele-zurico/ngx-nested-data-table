import { NgxDataTableModule } from './ngx-data-table.module';

describe('NgxDataTableModule', () => {
  let ngxDataTableModule: NgxDataTableModule;

  beforeEach(() => {
    ngxDataTableModule = new NgxDataTableModule();
  });

  it('should create an instance', () => {
    expect(ngxDataTableModule).toBeTruthy();
  });
});
