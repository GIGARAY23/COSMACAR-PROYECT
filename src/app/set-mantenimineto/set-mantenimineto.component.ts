import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { AuthService } from '../servicios/auth.service';
import { Router, RouterModule } from '@angular/router';
import { Manteniminetos } from 'src/app/modelo';

@Component({
  selector: 'app-set-mantenimineto',
  templateUrl: './set-mantenimineto.component.html',
  styleUrls: ['./set-mantenimineto.component.scss'],
})
export class SetManteniminetoComponent implements OnInit {
  mantenimiento: Manteniminetos[] = [];
  email: string;
  password: string;

  newMantenimeitos: Manteniminetos = {
    nombre: '',
    precio: null,
    tiempo: '',
    foto: '',
    id: this.firestoreService.getId(),
    fecha: new Date(),
  };
  private path = 'mantenimeinto/';
  constructor(public firestoreService: FirestoreService,
    private authService: AuthService,
    public router: Router,
    
    
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
    this.firestoreService
      .getCollection<Manteniminetos>(this.path)
      .subscribe((res) => {
        this.mantenimiento = res;
      });
  }

  guardarMantenimientos() {
    //const id= this.firestoreService.getId();
    this.firestoreService.createDoc(
      this.newMantenimeitos,
      this.path,
      this.newMantenimeitos.id
    );
  }
  deletemantenimiento(productos: Manteniminetos) {
    this.firestoreService.deleteDoc(this.path, productos.id);
  }
}
