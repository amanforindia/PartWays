import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicationComponent } from './application/application.component';
import { ApplicationResolver } from './application/application.resolver.service';
import { AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login';
import { ChildrenComponent } from './children/children.component';
import { ChildrenResolver } from './children/children.resolver.service';
import { CourtCasesComponent } from './court-cases/court-cases.component';
import { DefactoComponent } from './defacto/defacto.component';
import { DefactoResolver } from './defacto/defacto.resolver.service';
import { GenerateConsentOrdersComponent } from './generate-consent-orders/generate-consent-orders.component';
import { ConsentOrdersResolver } from './generate-consent-orders/generate-consent-orders.resolver.service';
import { HomeComponent } from './home/home';
import { LegalAdviceComponent } from './legal-advice/legal-advice.component';
import { LegalAdviceResolver } from './legal-advice/legal-advice.resolver.service';
import { ApplicantFinancialInstitutionsResolver } from './maintenance/financial-institutions/applicant-financial-institutions.resolver.service';
import { RespondentFinancialInstitutionsResolver } from './maintenance/financial-institutions/respondent-financial-institutions.resolver.service';
import { ApplicantInterestInBusinessResolver } from './maintenance/interest-in-business/applicant-interest-in-business.resolver.service';
import { RespondentInterestInBusinessResolver } from './maintenance/interest-in-business/respondent-interest-in-business.resolver.service';
import { ApplicantInvestmentsResolver } from './maintenance/investments/applicant-investments.resolver.service';
import { RespondentInvestmentsResolver } from './maintenance/investments/respondent-investments.resolver.service';
import { ApplicantLifeInsuranceResolver } from './maintenance/life-insurance/applicant-life-insurance.resolver.service';
import { RespondentLifeInsuranceResolver } from './maintenance/life-insurance/respondent-life-insurance.resolver.service';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { MaintenanceResolver } from './maintenance/maintenance.resolver.service';
import { ApplicantMotorVehiclesResolver } from './maintenance/motor-vehicles/applicant-motor-vehicles.resolver.service';
import { RespondentMotorVehiclesResolver } from './maintenance/motor-vehicles/respondent-motor-vehicles.resolver.service';
import { ApplicantOtherInterestResolver } from './maintenance/other-interest/applicant-other-interest.resolver.service';
import { RespondentOtherInterestResolver } from './maintenance/other-interest/respondent-other-interest.resolver.service';
import { ApplicantRealEstateResolver } from './maintenance/real-estate/applicant-real-estate.resolver.service';
import { RespondentRealEstateResolver } from './maintenance/real-estate/respondent-real-estate.resolver.service';
import { PageNotFoundComponent } from './page.not.found';
import { ParentingComponent } from './parenting/parenting.component';
import { ParentingResolver } from './parenting/parenting.resolver.service';
import { PartyComponent } from './party/party';
import { PartiesResolver } from './party/party.resolver.service';
import { PrintFormComponent } from './print-form/print-form.component';
import { PrintFormResolver } from './print-form/print-form.resolver.service';
import { PropertyComponent } from './property/property.component';
import { PropertyResolver } from './property/property.resolver.service';
import { RelationshipComponent } from './relationship/relationship.component';
import { RelationshipResolver } from './relationship/relationship.resolver.service';
import { StatementOfTruthComponent } from './statement-of-truth/statement-of-truth.component';
import { StatementOfTruthResolver } from './statement-of-truth/statement-of-truth.resolver.service';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'Parties',
        component: PartyComponent,
        canActivate: [AuthGuard],
        data: { title: 'Parties' },
        resolve: {
            parties: PartiesResolver,
        },
    },
    {
        path: 'Parties/:id',
        component: PartyComponent,
        canActivate: [AuthGuard],
        data: { title: 'Parties' },
        resolve: {
            parties: PartiesResolver,
        },
    }, {
        path: 'Application',
        component: ApplicationComponent,
        canActivate: [AuthGuard],
        data: { title: 'Application' },
        resolve: {
            applicationData: ApplicationResolver,
        },
    }, {
        path: 'respondent/:id',
        component: ApplicationComponent,
        canActivate: [AuthGuard],
        data: { title: 'Application' },
        resolve: {
            applicationData: ApplicationResolver,
        },
    }, {
        path: 'mediator/:id',
        component: ApplicationComponent,
        canActivate: [AuthGuard],
        data: { title: 'Application' },
        resolve: {
            applicationData: ApplicationResolver,
        },
    }, {
        path: 'Relationship',
        component: RelationshipComponent,
        canActivate: [AuthGuard],
        data: { title: 'Relationship' },
        resolve: {
            relationship: RelationshipResolver,
        },
    }, {
        path: 'CourtCases',
        component: CourtCasesComponent,
        canActivate: [AuthGuard],
        data: { title: 'Court Cases' },
    }, {
        path: 'Children',
        component: ChildrenComponent,
        canActivate: [AuthGuard],
        data: { title: 'Children' },
        resolve: {
            children: ChildrenResolver,
        },
    }, {
        path: 'Parenting',
        component: ParentingComponent,
        canActivate: [AuthGuard],
        data: { title: 'Parenting' },
        resolve: {
            children: ChildrenResolver,
        },
    }, {
        path: 'Maintenance',
        component: MaintenanceComponent,
        canActivate: [AuthGuard],
        data: { title: 'Maintenance' },
        resolve: {
            applicantRealEstates: ApplicantRealEstateResolver,
            respondentRealEstates: RespondentRealEstateResolver,
            applicantMotorVehicles: ApplicantMotorVehiclesResolver,
            respondentMotorVehicles: RespondentMotorVehiclesResolver,
            applicantFinancialInstitutions: ApplicantFinancialInstitutionsResolver,
            respondentFinancialInstitutions: RespondentFinancialInstitutionsResolver,
            applicantInterestInBusiness: ApplicantInterestInBusinessResolver,
            respondentInterestInBusiness: RespondentInterestInBusinessResolver,
            applicantInvestments: ApplicantInvestmentsResolver,
            respondentInvestments: RespondentInvestmentsResolver,
            applicantLifeInsurance: ApplicantLifeInsuranceResolver,
            respondentLifeInsurance: RespondentLifeInsuranceResolver,
            applicantOtherInterest: ApplicantOtherInterestResolver,
            respondentOtherInterest: RespondentOtherInterestResolver,
        },
    }, {
        path: 'Defacto',
        component: DefactoComponent,
        canActivate: [AuthGuard],
        data: { title: 'Defacto' },
        resolve: {
            relationship: DefactoResolver,
        },
    }, {
        path: 'Property',
        component: PropertyComponent,
        canActivate: [AuthGuard],
        data: { title: 'Property' },
        resolve: {
            relationship: PropertyResolver,
        },
    }, {
        path: 'LegalAdvice',
        component: LegalAdviceComponent,
        canActivate: [AuthGuard],
        data: { title: 'Legal Advice' },
    }, {
        path: 'ConsentOrders',
        component: PrintFormComponent,
        data: { title: 'Consent Orders' },
        resolve: {
            application: PrintFormResolver,
        },
    }, {
        path: '',
        component: HomeComponent,
        data: { title: 'PartWays' },
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        data: { title: 'Page Not Found' },
    },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
