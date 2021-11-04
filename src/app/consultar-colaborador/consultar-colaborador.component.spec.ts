import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { Colaborador } from '../data/colaborador';
import { ConsultarColaboradorComponent } from './consultar-colaborador.component';
import { DataService } from '../data/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {  ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
describe('ConsultarColaboradorComponent', () => {

    let service: DataService;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ConsultarColaboradorComponent],
            imports: [ ReactiveFormsModule, HttpClientTestingModule]
        }).compileComponents();
        service = TestBed.inject(DataService);
        // Inject the http service and test controller for each test
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

   
});

