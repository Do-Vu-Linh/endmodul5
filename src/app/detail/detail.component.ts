import {Component, OnInit} from '@angular/core';
import {LocalService} from "../service/Local.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Local} from "../model/Local";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  local !: Local;

  constructor(private localService: LocalService,
              private routerActive: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const id = Number(this.routerActive.snapshot.paramMap.get("id"))
    this.localService.findLocal(id).subscribe((data) => {
      this.local = data;
    })
  }

  back() {
    this.router.navigate(['/local'])


  }
}
