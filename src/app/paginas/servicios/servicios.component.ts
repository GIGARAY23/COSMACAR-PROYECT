import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router, RouterModule } from '@angular/router';
import { Manteniminetos } from 'src/app/modelo';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent implements OnInit {
  mantenimiento: Manteniminetos[] = [];
  private path = 'mantenimeinto/';
  constructor(private authService: AuthService,
    public router: Router,
    public firestoreService: FirestoreService) { }

  ngOnInit() {
    this.getProductos();
  }
  getProductos() {
    this.firestoreService.getCollection<Manteniminetos>(this.path).subscribe(
      (res) => {
        this.mantenimiento = res;
        this.firestoreService
      }
    );
  }
}
