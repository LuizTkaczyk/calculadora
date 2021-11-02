import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    })
  );

  it('deve garantir que 5- 4 = 1',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let subtracao = service.calcular(5, 4, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(1);
    })
  );

  it('deve garantir que 2 * 4 = 8',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let multi = service.calcular(2, 4, CalculadoraService.MULTIPLICACAO);
      expect(multi).toEqual(8);
    })
  );

  it('deve garantir que 12 / 4 = 3',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let div = service.calcular(12, 4, CalculadoraService.DIVISAO);
      expect(div).toEqual(3);
    })
  );

  it('deve retornar zero para operação inválida',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let opInvalida = service.calcular(1,4, '%');
      expect(opInvalida).toEqual(0);
    })
  );


});
