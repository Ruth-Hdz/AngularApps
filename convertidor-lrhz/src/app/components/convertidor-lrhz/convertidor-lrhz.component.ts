import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lrhz-convertidor-lrhz',
  templateUrl: './convertidor-lrhz.component.html',
  styleUrls: ['./convertidor-lrhz.component.css']
})
export class ConvertidorLrhzComponent implements OnInit {

  cantidad = 0;
  tengo = '';
  quiero = '';
  total = 0;

  monedas: string[] = ['USD', 'MXN', 'EUR', 'LIBRA', 'AUD', 'CAD', 'CHF', 'CNY', 'HKD', 'INR'];

  constructor() { }

  ngOnInit(): void {
    this.convertir(); // Llamada inicial a convertir al cargar el componente
  }

  convertir(): void {
    switch (this.tengo) {
      case 'USD':
        if (this.quiero === 'USD') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'MXN') {
          this.total = this.cantidad * 16.72;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad * 0.92;
        }
        if (this.quiero === 'LIBRA') {
          this.total = this.cantidad * 0.79;
        }
        if (this.quiero === 'AUD') {
          this.total = this.cantidad * 1.52;
        }
        if (this.quiero === 'CAD') {
          this.total = this.cantidad * 1.35;
        }
        if (this.quiero === 'CHF') {
          this.total = this.cantidad * 0.88;
        }
        if (this.quiero === 'CNY') {
          this.total = this.cantidad * 7.20;
        }
        if (this.quiero === 'HKD') {
          this.total = this.cantidad * 7.82;
        }
        if (this.quiero === 'INR') {
          this.total = this.cantidad * 82.89;
        }

        break;
      case 'MXN':
        if (this.quiero === 'USD') {
          this.total = this.cantidad / 16.72;
        }
        if (this.quiero === 'MXN') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad / 18.21;
        }
        if (this.quiero === 'LIBRA') {
          this.total = this.cantidad / 21.28;
        }
        if (this.quiero === 'AUD') {
          this.total = this.cantidad / 10.97;
        }
        if (this.quiero === 'CAD') {
          this.total = this.cantidad / 12.39;
        }
        if (this.quiero === 'CHF') {
          this.total = this.cantidad / 18.90;
        }
        if (this.quiero === 'CNY') {
          this.total = this.cantidad / 2.32;
        }
        if (this.quiero === 'HKD') {
          this.total = this.cantidad / 2.14;
        }
        if (this.quiero === 'INR') {
          this.total = this.cantidad / 0.20;
        }

        break;
      case 'EUR':
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 1.09;
        }
        if (this.quiero === 'MXN') {
          this.total = this.cantidad * 18.21;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'LIBRA') {
          this.total = this.cantidad * 0.86;
        }
        if (this.quiero === 'AUD') {
          this.total = this.cantidad * 1.66;
        }
        if (this.quiero === 'CAD') {
          this.total = this.cantidad * 1.47;
        }
        if (this.quiero === 'CHF') {
          this.total = this.cantidad * 0.96;
        }
        if (this.quiero === 'CNY') {
          this.total = this.cantidad * 7.84;
        }
        if (this.quiero === 'HKD') {
          this.total = this.cantidad * 8.52;
        }
        if (this.quiero === 'INR') {
          this.total = this.cantidad * 90.31;
        }

        break;
        case 'LIBRA':
          if (this.quiero === 'USD') {
            this.total = this.cantidad / 0.79;
          }
          if (this.quiero === 'MXN') {
            this.total = this.cantidad * 21.28;
          }
          if (this.quiero === 'EUR') {
            this.total = this.cantidad / 0.86;
          }
          if (this.quiero === 'LIBRA') {
            this.total = this.cantidad;
          }
          if (this.quiero === 'AUD') {
            this.total = this.cantidad / 0.52;
          }
          if (this.quiero === 'CAD') {
            this.total = this.cantidad / 0.58;
          }
          if (this.quiero === 'CHF') {
            this.total = this.cantidad / 0.89;
          }
          if (this.quiero === 'CNY') {
            this.total = this.cantidad * 9.16;
          }
          if (this.quiero === 'HKD') {
            this.total = this.cantidad / 10.43;
          }
          if (this.quiero === 'INR') {
            this.total = this.cantidad / 0.0095;
          }
        break;
        
      case 'AUD':
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 0.66;
        }
        if (this.quiero === 'MXN') {
          this.total = this.cantidad * 10.97;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad * 0.60;
        }
        if (this.quiero === 'LIBRA') {
          this.total = this.cantidad * 0.52;
        }
        if (this.quiero === 'AUD') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'CAD') {
          this.total = this.cantidad * 0.89;
        }
        if (this.quiero === 'CHF') {
          this.total = this.cantidad * 0.58;
        }
        if (this.quiero === 'CNY') {
          this.total = this.cantidad * 4.72;
        }
        if (this.quiero === 'HKD') {
          this.total = this.cantidad * 5.14;
        }
        if (this.quiero === 'INR') {
          this.total = this.cantidad * 54.40;
        }
        break;

      case 'CAD':
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 0.74;
        }
        if (this.quiero === 'MXN') {
          this.total = this.cantidad * 12.36;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad * 0.68;
        }
        if (this.quiero === 'LIBRA') {
          this.total = this.cantidad * 0.58;
        }
        if (this.quiero === 'AUD') {
          this.total = this.cantidad * 1.13;
        }
        if (this.quiero === 'CAD') {
          this.total = this.cantidad * 1.35;
        }
        if (this.quiero === 'CHF') {
          this.total = this.cantidad * 0.65;
        }
        if (this.quiero === 'CNY') {
          this.total = this.cantidad * 5.32;
        }
        if (this.quiero === 'HKD') {
          this.total = this.cantidad * 5.78;
        }
        if (this.quiero === 'INR') {
          this.total = this.cantidad * 61.27;
        }
        break;

      case 'CHF':
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 1.13;
        }
        if (this.quiero === 'MXN') {
          this.total = this.cantidad * 18.90;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad * 1.04;
        }
        if (this.quiero === 'LIBRA') {
          this.total = this.cantidad * 0.89;
        }
        if (this.quiero === 'AUD') {
          this.total = this.cantidad * 1.72;
        }
        if (this.quiero === 'CAD') {
          this.total = this.cantidad * 1.53;
        }
        if (this.quiero === 'CHF') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'CNY') {
          this.total = this.cantidad * 8.14;
        }
        if (this.quiero === 'HKD') {
          this.total = this.cantidad * 8.84;
        }
        if (this.quiero === 'INR') {
          this.total = this.cantidad * 93.71;
        }
        break;
        case 'CNY':
          if (this.quiero === 'USD') {
            this.total = this.cantidad * 0.14;
          }
          if (this.quiero === 'MXN') {
            this.total = this.cantidad * 2.32;
          }
          if (this.quiero === 'EUR') {
            this.total = this.cantidad * 0.13;
          }
          if (this.quiero === 'LIBRA') {
            this.total = this.cantidad * 0.11;
          }
          if (this.quiero === 'AUD') {
            this.total = this.cantidad * 0.22;
          }
          if (this.quiero === 'CAD') {
            this.total = this.cantidad * 0.19;
          }
          if (this.quiero === 'CHF') {
            this.total = this.cantidad * 0.12;
          }
          if (this.quiero === 'CNY') {
            this.total = this.cantidad;
          }
          if (this.quiero === 'HKD') {
            this.total = this.cantidad * 1.09;
          }
          if (this.quiero === 'INR') {
            this.total = this.cantidad * 11.52;
          }
          break;
        
          case 'HKD':
            if (this.quiero === 'USD') {
              this.total = this.cantidad * 0.13; 
            }
            if (this.quiero === 'MXN') {
              this.total = this.cantidad * 2.14; 
            }
            if (this.quiero === 'EUR') {
              this.total = this.cantidad * 0.12;
            }
            if (this.quiero === 'LIBRA') {
              this.total = this.cantidad * 0.10; 
            }
            if (this.quiero === 'AUD') {
              this.total = this.cantidad * 0.19;
            }
            if (this.quiero === 'CAD') {
              this.total = this.cantidad * 0.17; 
            }
            if (this.quiero === 'CHF') {
              this.total = this.cantidad * 0.11; 
            }
            if (this.quiero === 'CNY') {
              this.total = this.cantidad * 0.92; 
            }
            if (this.quiero === 'HKD') {
              this.total = this.cantidad; 
            }
            if (this.quiero === 'INR') {
              this.total = this.cantidad * 10.58; 
            }
            break;
          
          case 'INR':
            if (this.quiero === 'USD') {
              this.total = this.cantidad * 0.012; 
            }
            if (this.quiero === 'MXN') {
              this.total = this.cantidad * 0.20; 
            }
            if (this.quiero === 'EUR') {
              this.total = this.cantidad * 0.011; 
            }
            if (this.quiero === 'LIBRA') {
              this.total = this.cantidad * 0.0095; 
            }
            if (this.quiero === 'AUD') {
              this.total = this.cantidad * 0.018; 
            }
            if (this.quiero === 'CAD') {
              this.total = this.cantidad * 0.016;
            } 
            if (this.quiero === 'CHF') {
              this.total = this.cantidad * 0.011; 
            }
            if (this.quiero === 'CNY') {
              this.total = this.cantidad * 0.087; 
            }
            if (this.quiero === 'HKD') {
              this.total = this.cantidad * 0.094; 
            }
            if (this.quiero === 'INR') {
              this.total = this.cantidad; 
            }
            break;
    }
  }

}
