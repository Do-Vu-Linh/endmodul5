import {Component, OnInit} from '@angular/core';
import {Local} from "../model/Local";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {LocalService} from "../service/Local.service";

@Component({
  selector: 'app-formcreat',
  templateUrl: './formcreat.component.html',
  styleUrls: ['./formcreat.component.scss']
})
export class FormcreatComponent implements OnInit {
  local !: Local;
  formLocal !: FormGroup;

  constructor(private routerActive: ActivatedRoute,
              private router: Router,
              private localService: LocalService
  ) {
  }

  ngOnInit() {
    const id = Number(this.routerActive.snapshot.paramMap.get("id"))
    this.formLocal = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', Validators.required),
      price: new FormControl(''),
      description: new FormControl(''),
    })
    this.localService.findLocal(id).subscribe((data) => {

      this.local = data
      this.formLocal.patchValue(data)
    })

  }

  back() {
    this.router.navigate(['/local'])
  }

  onSubmit() {
    this.local = this.formLocal.value
    this.localService.save(this.local).subscribe(() => {
      this.back()
    })
  }
}
