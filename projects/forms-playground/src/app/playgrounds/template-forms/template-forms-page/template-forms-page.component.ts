import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { UserInfo } from '../../../core/interfaces/user-info';
import { BanWordsDirective } from '../validators/ban-words.directive';

@Component({
	selector: 'app-template-forms-page',
	standalone: true,
	imports: [CommonModule, FormsModule, BanWordsDirective],
	templateUrl: './template-forms-page.component.html',
	styleUrls: ['../../common-page.scss', '../../common-form.scss', './template-forms-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateFormsPageComponent {
	userInfo: UserInfo = {
		firstName: '',
		lastName: '',
		nickname: '',
		email: '',
		yearOfBirth: 0,
		passport: '',
		fullAddress: '',
		city: '',
		postCode: 0,
	};

	constructor() {}

	get years() {
		const now = new Date().getUTCFullYear();
		return Array(now - (now - 40))
			.fill('')
			.map((_, idx) => now - idx);
	}

	onSubmitForm(form: NgForm): void {
		console.log(form.value);
	}
}
