import { Component, OnInit, Input } from '@angular/core';
import { Folder } from '../folder';
import { FolderService } from '../_services/folder.service';


@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {
  folder = new Folder();
  folders: Folder[];
  constructor(private folderService: FolderService) { }

  getFolders(): void {
    this.folderService.getFolders()
      .subscribe(folders => this.folders = folders);
  }
  ngOnInit() {
      this.getFolders();
  }
  submitted = false;

  submitForm = (folderForm) => {
    this.submitted = true;
    console.log("here is the folder", folderForm)
    let name = folderForm.value.name
    this.folderService.addFolder({ name } as Folder)
    .subscribe(folder => {
      this.folders.push(folder);
    });
  }

}
