import { TestBed, inject } from '@angular/core/testing';

import { MsgAlertService } from './msg-alert.service';

describe('MsgAlertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MsgAlertService]
    });
  });

  it('should be created', inject([MsgAlertService], (service: MsgAlertService) => {
    expect(service).toBeTruthy();
  }));
});
