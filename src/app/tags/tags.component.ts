import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tag } from '../tag';
import { TagService } from '../_services/tag.service';



@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
@Output() newTag = new EventEmitter<Tag[]>();

  tag = new Tag();
  tags: Tag[];
  constructor(private tagService: TagService) { }

  getTags(): void {
    this.tagService.getTags()
    .subscribe(tags => {
    this.tags = tags;
    this.newTag.emit(tags);
    });
  }

  ngOnInit() {
      this.getTags();
  }

  submitted = false;

  submitForm = (tagForm) => {
    this.submitted = true;
    console.log("here is the tag", tagForm)
    let name = tagForm.value.name
    this.tagService.addTag({ name } as Tag)
    .subscribe(tag => {
      this.tags.push(tag);
    });
  }


}