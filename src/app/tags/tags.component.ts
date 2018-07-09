import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tag } from '../models';
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
  submitted = false;

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.getTags();
  }

  getTags(): void {
    this.tagService.getTags()
      .subscribe(tags => {
        this.tags = tags;
        this.newTag.emit(tags);
      });
  }

  submitForm(tagForm) {
    this.submitted = true;
    console.log('here is the tag', tagForm);
    const name = tagForm.value.name;
    this.tagService.addTag({ name } as Tag)
      .subscribe(tag => {
        this.getTags();
        tagForm.reset();
      });
  }

  deleteTag(tag) {
    if (confirm(`Are you sure want to remoe this tag`)) {
      this.tagService.deleteTag(tag.id)
        .subscribe(deleteTag => {
          this.getTags();
        });
    }
  }
}
