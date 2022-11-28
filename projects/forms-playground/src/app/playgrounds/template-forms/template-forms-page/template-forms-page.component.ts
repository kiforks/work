import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

import { BanWordsDirective } from '../validators/ban-words.directive';
import { PasswordShouldMatchDirective } from '../validators/password-should-match.directive';
import { UniqueNicknameDirective } from '../validators/unique-nickname.directive';
import { UserInfo } from '../../../core/interfaces/user-info';

@Component({
	selector: 'app-template-forms-page',
	standalone: true,
	imports: [CommonModule, FormsModule, BanWordsDirective, PasswordShouldMatchDirective, UniqueNicknameDirective],
	templateUrl: './template-forms-page.component.html',
	styleUrls: ['../../common-page.scss', '../../common-form.scss', './template-forms-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateFormsPageComponent implements OnInit, AfterViewInit {
	userInfo: UserInfo = {
		firstName: 'Kostya',
		lastName: 'Kifor',
		nickname: 'kifor.kostya',
		email: 'k.kifor@tenantcloud.com',
		yearOfBirth: 1996,
		passport: 'AB123456',
		fullAddress: 'Somestreet 4',
		city: 'Ivano-Frankivsk',
		postCode: 123456,
		password: '123456',
		confirmPassword: '123456',
	};

	@ViewChild(NgForm)
	formDir!: NgForm;

	private initialFormValues: unknown;

	get isAdult() {
		const currentYear = new Date().getFullYear();
		return currentYear - this.userInfo.yearOfBirth >= 18;
	}

	get years() {
		const now = new Date().getUTCFullYear();
		return Array(now - (now - 40))
			.fill('')
			.map((_, idx) => now - idx);
	}

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		queueMicrotask(() => {
			this.initialFormValues = this.formDir.value;
		});
	}

	onSubmitForm(form: any, e: SubmitEvent) {
		console.log(e);
		console.log(form.form.controls);
		// Strategy 1 - Reset form values, validation statuses, making controls untouched, pristine, etc
		this.formDir.resetForm();
	}

	onReset(e: Event) {
		e.preventDefault();
		this.formDir.resetForm();
	}

	onResetInitialClick(e: Event) {
		e.preventDefault();
		// Strategy 2 - Reset only control statuses but not values.
		this.formDir.resetForm(this.initialFormValues);
	}
}
