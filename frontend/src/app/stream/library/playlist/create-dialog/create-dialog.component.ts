import { requiredValidator } from './../../../../shared/validators/common.validator';
import { FormErrorHandler } from './../../../../shared/error-handlers/form.handler';
import { Subscription } from 'rxjs';
import { dialogTrigger } from './create-dialog.animation';
import { OverlayService } from '../../../shared/services/overlay-service/overlay.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {PlaylistService} from '../../../shared/services/data-service/playlist.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'playlist-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss'],
  animations: [dialogTrigger],
})
export class CreateDialogComponent implements OnInit, OnDestroy {
  subs = new Subscription();
  dialogStatus = false;
  loading = false;
  form: FormGroup;
  constructor(
    private playlistService: PlaylistService,
    private overlayService: OverlayService,
    private formErrorHandler: FormErrorHandler,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ['', requiredValidator],
    });
  }

  ngOnInit() {
    this.subs.add(
      this.playlistService.showDialog$.subscribe((status) => {
        this.dialogStatus = status;
        this.overlayService.updateOverlayStatus(status);
      })
    );
    this.subs.add(
      this.overlayService.overlayStatus$.subscribe((status) => {
        this.dialogStatus = status;
      })
    );
  }

  get name() {
    return this.form.get('name');
  }

  ngOnDestroy() {
    this.playlistService.updateDialogStatus(false);
    this.subs.unsubscribe();
  }

  cancel() {
    this.playlistService.updateDialogStatus(false);
  }

  createPlaylist() {
    this.loading = true;
    this.playlistService.createPlaylist(this.form.value).subscribe(
      () => {
        this.playlistService.updateDialogStatus(false);
        this.loading = false;
      },
      (err) => {
        this.formErrorHandler.handleServerErrors(this.form, err);
        this.loading = false;
      }
    );
  }
}
