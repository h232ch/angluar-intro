import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  @Input() animal: string | undefined;
  @Output() changed = new EventEmitter();

  ngOnInit(): void {
    this.changed.emit('Horse');
  }

}
