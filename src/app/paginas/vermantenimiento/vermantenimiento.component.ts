import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router, RouterModule } from '@angular/router';
import { Manteniminetos } from 'src/app/modelo';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-vermantenimiento',
  templateUrl: './vermantenimiento.component.html',
  styleUrls: ['./vermantenimiento.component.scss'],
})
export class VermantenimientoComponent implements OnInit {
  mantenimiento: Manteniminetos[] = [];

  email: string;
  password: string;

  private path = 'mantenimeinto/';
  constructor(
    private authService: AuthService,
    public router: Router,
    public firestoreService: FirestoreService
  ) {}

  ngOnInit() {
    this.getProductos();
  }

  onSubmitLogin() {
    this.authService
      .login(this.email, this.password)
      .then((res) => {
        this.router.navigate(['/inicio']);
      })
      .catch((err) =>
        alert('los datos son incorrectos o no existe el usuario')
      );
  }

  getProductos() {
    this.firestoreService.getCollection<Manteniminetos>(this.path).subscribe(
      (res) => {
        this.mantenimiento = res;
        this.firestoreService
      }
    );
  }
  
  deletemantenimiento(productos: Manteniminetos ){
    this.firestoreService.deleteDoc(this.path, productos.id )
    
      }}
