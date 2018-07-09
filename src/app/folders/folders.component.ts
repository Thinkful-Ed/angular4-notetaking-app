import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Folder } from '../models';
import { FolderService } from '../_services/folder.service';


@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {
  @Output() newFolder = new EventEmitter<Folder[]>();

  folder = new Folder();
  folders: Folder[];
  submitted = false;

  constructor(private folderService: FolderService) { }

  ngOnInit() {
    this.getFolders();
  }

  getFolders(): void {
    this.folderService.getFolders()
      .subscribe(folders => {
        this.folders = folders;
        console.log('new folders', folders);
        this.newFolder.emit(folders);
      });
  }

  submitForm(folderForm) {
    this.submitted = true;
    console.log('here is the folder', folderForm);
    const name = folderForm.value.name;
    this.folderService.addFolder({ name } as Folder)
      .subscribe(folder => {
        this.getFolders();
        folderForm.reset();
      });
  }

  deleteFolder(folder) {
    if (confirm(`Are you sure want to remoe this folder`)) {
      this.folderService.deleteFolder(folder.id)
        .subscribe(deleteFolder => {
          this.getFolders();
        });
    }
  }
}
