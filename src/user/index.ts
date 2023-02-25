// https://www.terraform.io/docs/providers/azuread/r/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether or not the account should be enabled
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#account_enabled User#account_enabled}
  */
  readonly accountEnabled?: boolean | cdktf.IResolvable;
  /**
  * The age group of the user
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#age_group User#age_group}
  */
  readonly ageGroup?: string;
  /**
  * The telephone numbers for the user. Only one number can be set for this property. Read-only for users synced with Azure AD Connect
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#business_phones User#business_phones}
  */
  readonly businessPhones?: string[];
  /**
  * The city in which the user is located
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#city User#city}
  */
  readonly city?: string;
  /**
  * The company name which the user is associated. This property can be useful for describing the company that an external user comes from
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#company_name User#company_name}
  */
  readonly companyName?: string;
  /**
  * Whether consent has been obtained for minors
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#consent_provided_for_minor User#consent_provided_for_minor}
  */
  readonly consentProvidedForMinor?: string;
  /**
  * The cost center associated with the user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#cost_center User#cost_center}
  */
  readonly costCenter?: string;
  /**
  * The country/region in which the user is located, e.g. `US` or `UK`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#country User#country}
  */
  readonly country?: string;
  /**
  * The name for the department in which the user works
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#department User#department}
  */
  readonly department?: string;
  /**
  * Whether the users password is exempt from expiring
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#disable_password_expiration User#disable_password_expiration}
  */
  readonly disablePasswordExpiration?: boolean | cdktf.IResolvable;
  /**
  * Whether the user is allowed weaker passwords than the default policy to be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#disable_strong_password User#disable_strong_password}
  */
  readonly disableStrongPassword?: boolean | cdktf.IResolvable;
  /**
  * The name to display in the address book for the user
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#display_name User#display_name}
  */
  readonly displayName: string;
  /**
  * The name of the division in which the user works.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#division User#division}
  */
  readonly division?: string;
  /**
  * The employee identifier assigned to the user by the organisation
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#employee_id User#employee_id}
  */
  readonly employeeId?: string;
  /**
  * Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#employee_type User#employee_type}
  */
  readonly employeeType?: string;
  /**
  * The fax number of the user
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#fax_number User#fax_number}
  */
  readonly faxNumber?: string;
  /**
  * Whether the user is forced to change the password during the next sign-in. Only takes effect when also changing the password
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#force_password_change User#force_password_change}
  */
  readonly forcePasswordChange?: boolean | cdktf.IResolvable;
  /**
  * The given name (first name) of the user
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#given_name User#given_name}
  */
  readonly givenName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The user’s job title
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#job_title User#job_title}
  */
  readonly jobTitle?: string;
  /**
  * The SMTP address for the user. Cannot be unset.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#mail User#mail}
  */
  readonly mail?: string;
  /**
  * The mail alias for the user. Defaults to the user name part of the user principal name (UPN)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#mail_nickname User#mail_nickname}
  */
  readonly mailNickname?: string;
  /**
  * The object ID of the user's manager
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#manager_id User#manager_id}
  */
  readonly managerId?: string;
  /**
  * The primary cellular telephone number for the user
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#mobile_phone User#mobile_phone}
  */
  readonly mobilePhone?: string;
  /**
  * The office location in the user's place of business
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#office_location User#office_location}
  */
  readonly officeLocation?: string;
  /**
  * The value used to associate an on-premise Active Directory user account with their Azure AD user object. This must be specified if you are using a federated domain for the user's `user_principal_name` property when creating a new user account
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#onpremises_immutable_id User#onpremises_immutable_id}
  */
  readonly onpremisesImmutableId?: string;
  /**
  * Additional email addresses for the user
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#other_mails User#other_mails}
  */
  readonly otherMails?: string[];
  /**
  * The password for the user. The password must satisfy minimum requirements as specified by the password policy. The maximum length is 256 characters. This property is required when creating a new user
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#password User#password}
  */
  readonly password?: string;
  /**
  * The postal code for the user's postal address. The postal code is specific to the user's country/region. In the United States of America, this attribute contains the ZIP code
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#postal_code User#postal_code}
  */
  readonly postalCode?: string;
  /**
  * The user's preferred language, in ISO 639-1 notation
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#preferred_language User#preferred_language}
  */
  readonly preferredLanguage?: string;
  /**
  * Whether or not the Outlook global address list should include this user
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#show_in_address_list User#show_in_address_list}
  */
  readonly showInAddressList?: boolean | cdktf.IResolvable;
  /**
  * The state or province in the user's address
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#state User#state}
  */
  readonly state?: string;
  /**
  * The street address of the user's place of business
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#street_address User#street_address}
  */
  readonly streetAddress?: string;
  /**
  * The user's surname (family name or last name)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#surname User#surname}
  */
  readonly surname?: string;
  /**
  * The usage location of the user. Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries. The usage location is a two letter country code (ISO standard 3166). Examples include: `NO`, `JP`, and `GB`. Cannot be reset to null once set
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#usage_location User#usage_location}
  */
  readonly usageLocation?: string;
  /**
  * The user principal name (UPN) of the user
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#user_principal_name User#user_principal_name}
  */
  readonly userPrincipalName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#timeouts User#timeouts}
  */
  readonly timeouts?: UserTimeouts;
}
export interface UserTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#create User#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#delete User#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#read User#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/user#update User#update}
  */
  readonly update?: string;
}

export function userTimeoutsToTerraform(struct?: UserTimeoutsOutputReference | UserTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class UserTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/r/user azuread_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/r/user azuread_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_user',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '2.35.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountEnabled = config.accountEnabled;
    this._ageGroup = config.ageGroup;
    this._businessPhones = config.businessPhones;
    this._city = config.city;
    this._companyName = config.companyName;
    this._consentProvidedForMinor = config.consentProvidedForMinor;
    this._costCenter = config.costCenter;
    this._country = config.country;
    this._department = config.department;
    this._disablePasswordExpiration = config.disablePasswordExpiration;
    this._disableStrongPassword = config.disableStrongPassword;
    this._displayName = config.displayName;
    this._division = config.division;
    this._employeeId = config.employeeId;
    this._employeeType = config.employeeType;
    this._faxNumber = config.faxNumber;
    this._forcePasswordChange = config.forcePasswordChange;
    this._givenName = config.givenName;
    this._id = config.id;
    this._jobTitle = config.jobTitle;
    this._mail = config.mail;
    this._mailNickname = config.mailNickname;
    this._managerId = config.managerId;
    this._mobilePhone = config.mobilePhone;
    this._officeLocation = config.officeLocation;
    this._onpremisesImmutableId = config.onpremisesImmutableId;
    this._otherMails = config.otherMails;
    this._password = config.password;
    this._postalCode = config.postalCode;
    this._preferredLanguage = config.preferredLanguage;
    this._showInAddressList = config.showInAddressList;
    this._state = config.state;
    this._streetAddress = config.streetAddress;
    this._surname = config.surname;
    this._usageLocation = config.usageLocation;
    this._userPrincipalName = config.userPrincipalName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // about_me - computed: true, optional: false, required: false
  public get aboutMe() {
    return this.getStringAttribute('about_me');
  }

  // account_enabled - computed: false, optional: true, required: false
  private _accountEnabled?: boolean | cdktf.IResolvable; 
  public get accountEnabled() {
    return this.getBooleanAttribute('account_enabled');
  }
  public set accountEnabled(value: boolean | cdktf.IResolvable) {
    this._accountEnabled = value;
  }
  public resetAccountEnabled() {
    this._accountEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountEnabledInput() {
    return this._accountEnabled;
  }

  // age_group - computed: false, optional: true, required: false
  private _ageGroup?: string; 
  public get ageGroup() {
    return this.getStringAttribute('age_group');
  }
  public set ageGroup(value: string) {
    this._ageGroup = value;
  }
  public resetAgeGroup() {
    this._ageGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageGroupInput() {
    return this._ageGroup;
  }

  // business_phones - computed: true, optional: true, required: false
  private _businessPhones?: string[]; 
  public get businessPhones() {
    return this.getListAttribute('business_phones');
  }
  public set businessPhones(value: string[]) {
    this._businessPhones = value;
  }
  public resetBusinessPhones() {
    this._businessPhones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessPhonesInput() {
    return this._businessPhones;
  }

  // city - computed: false, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // company_name - computed: false, optional: true, required: false
  private _companyName?: string; 
  public get companyName() {
    return this.getStringAttribute('company_name');
  }
  public set companyName(value: string) {
    this._companyName = value;
  }
  public resetCompanyName() {
    this._companyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyNameInput() {
    return this._companyName;
  }

  // consent_provided_for_minor - computed: false, optional: true, required: false
  private _consentProvidedForMinor?: string; 
  public get consentProvidedForMinor() {
    return this.getStringAttribute('consent_provided_for_minor');
  }
  public set consentProvidedForMinor(value: string) {
    this._consentProvidedForMinor = value;
  }
  public resetConsentProvidedForMinor() {
    this._consentProvidedForMinor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consentProvidedForMinorInput() {
    return this._consentProvidedForMinor;
  }

  // cost_center - computed: false, optional: true, required: false
  private _costCenter?: string; 
  public get costCenter() {
    return this.getStringAttribute('cost_center');
  }
  public set costCenter(value: string) {
    this._costCenter = value;
  }
  public resetCostCenter() {
    this._costCenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCenterInput() {
    return this._costCenter;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // creation_type - computed: true, optional: false, required: false
  public get creationType() {
    return this.getStringAttribute('creation_type');
  }

  // department - computed: false, optional: true, required: false
  private _department?: string; 
  public get department() {
    return this.getStringAttribute('department');
  }
  public set department(value: string) {
    this._department = value;
  }
  public resetDepartment() {
    this._department = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get departmentInput() {
    return this._department;
  }

  // disable_password_expiration - computed: false, optional: true, required: false
  private _disablePasswordExpiration?: boolean | cdktf.IResolvable; 
  public get disablePasswordExpiration() {
    return this.getBooleanAttribute('disable_password_expiration');
  }
  public set disablePasswordExpiration(value: boolean | cdktf.IResolvable) {
    this._disablePasswordExpiration = value;
  }
  public resetDisablePasswordExpiration() {
    this._disablePasswordExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePasswordExpirationInput() {
    return this._disablePasswordExpiration;
  }

  // disable_strong_password - computed: false, optional: true, required: false
  private _disableStrongPassword?: boolean | cdktf.IResolvable; 
  public get disableStrongPassword() {
    return this.getBooleanAttribute('disable_strong_password');
  }
  public set disableStrongPassword(value: boolean | cdktf.IResolvable) {
    this._disableStrongPassword = value;
  }
  public resetDisableStrongPassword() {
    this._disableStrongPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableStrongPasswordInput() {
    return this._disableStrongPassword;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // division - computed: false, optional: true, required: false
  private _division?: string; 
  public get division() {
    return this.getStringAttribute('division');
  }
  public set division(value: string) {
    this._division = value;
  }
  public resetDivision() {
    this._division = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisionInput() {
    return this._division;
  }

  // employee_id - computed: false, optional: true, required: false
  private _employeeId?: string; 
  public get employeeId() {
    return this.getStringAttribute('employee_id');
  }
  public set employeeId(value: string) {
    this._employeeId = value;
  }
  public resetEmployeeId() {
    this._employeeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get employeeIdInput() {
    return this._employeeId;
  }

  // employee_type - computed: false, optional: true, required: false
  private _employeeType?: string; 
  public get employeeType() {
    return this.getStringAttribute('employee_type');
  }
  public set employeeType(value: string) {
    this._employeeType = value;
  }
  public resetEmployeeType() {
    this._employeeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get employeeTypeInput() {
    return this._employeeType;
  }

  // external_user_state - computed: true, optional: false, required: false
  public get externalUserState() {
    return this.getStringAttribute('external_user_state');
  }

  // fax_number - computed: false, optional: true, required: false
  private _faxNumber?: string; 
  public get faxNumber() {
    return this.getStringAttribute('fax_number');
  }
  public set faxNumber(value: string) {
    this._faxNumber = value;
  }
  public resetFaxNumber() {
    this._faxNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faxNumberInput() {
    return this._faxNumber;
  }

  // force_password_change - computed: false, optional: true, required: false
  private _forcePasswordChange?: boolean | cdktf.IResolvable; 
  public get forcePasswordChange() {
    return this.getBooleanAttribute('force_password_change');
  }
  public set forcePasswordChange(value: boolean | cdktf.IResolvable) {
    this._forcePasswordChange = value;
  }
  public resetForcePasswordChange() {
    this._forcePasswordChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcePasswordChangeInput() {
    return this._forcePasswordChange;
  }

  // given_name - computed: false, optional: true, required: false
  private _givenName?: string; 
  public get givenName() {
    return this.getStringAttribute('given_name');
  }
  public set givenName(value: string) {
    this._givenName = value;
  }
  public resetGivenName() {
    this._givenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get givenNameInput() {
    return this._givenName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // im_addresses - computed: true, optional: false, required: false
  public get imAddresses() {
    return this.getListAttribute('im_addresses');
  }

  // job_title - computed: false, optional: true, required: false
  private _jobTitle?: string; 
  public get jobTitle() {
    return this.getStringAttribute('job_title');
  }
  public set jobTitle(value: string) {
    this._jobTitle = value;
  }
  public resetJobTitle() {
    this._jobTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTitleInput() {
    return this._jobTitle;
  }

  // mail - computed: true, optional: true, required: false
  private _mail?: string; 
  public get mail() {
    return this.getStringAttribute('mail');
  }
  public set mail(value: string) {
    this._mail = value;
  }
  public resetMail() {
    this._mail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailInput() {
    return this._mail;
  }

  // mail_nickname - computed: true, optional: true, required: false
  private _mailNickname?: string; 
  public get mailNickname() {
    return this.getStringAttribute('mail_nickname');
  }
  public set mailNickname(value: string) {
    this._mailNickname = value;
  }
  public resetMailNickname() {
    this._mailNickname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailNicknameInput() {
    return this._mailNickname;
  }

  // manager_id - computed: false, optional: true, required: false
  private _managerId?: string; 
  public get managerId() {
    return this.getStringAttribute('manager_id');
  }
  public set managerId(value: string) {
    this._managerId = value;
  }
  public resetManagerId() {
    this._managerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerIdInput() {
    return this._managerId;
  }

  // mobile_phone - computed: false, optional: true, required: false
  private _mobilePhone?: string; 
  public get mobilePhone() {
    return this.getStringAttribute('mobile_phone');
  }
  public set mobilePhone(value: string) {
    this._mobilePhone = value;
  }
  public resetMobilePhone() {
    this._mobilePhone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobilePhoneInput() {
    return this._mobilePhone;
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // office_location - computed: false, optional: true, required: false
  private _officeLocation?: string; 
  public get officeLocation() {
    return this.getStringAttribute('office_location');
  }
  public set officeLocation(value: string) {
    this._officeLocation = value;
  }
  public resetOfficeLocation() {
    this._officeLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get officeLocationInput() {
    return this._officeLocation;
  }

  // onpremises_distinguished_name - computed: true, optional: false, required: false
  public get onpremisesDistinguishedName() {
    return this.getStringAttribute('onpremises_distinguished_name');
  }

  // onpremises_domain_name - computed: true, optional: false, required: false
  public get onpremisesDomainName() {
    return this.getStringAttribute('onpremises_domain_name');
  }

  // onpremises_immutable_id - computed: true, optional: true, required: false
  private _onpremisesImmutableId?: string; 
  public get onpremisesImmutableId() {
    return this.getStringAttribute('onpremises_immutable_id');
  }
  public set onpremisesImmutableId(value: string) {
    this._onpremisesImmutableId = value;
  }
  public resetOnpremisesImmutableId() {
    this._onpremisesImmutableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onpremisesImmutableIdInput() {
    return this._onpremisesImmutableId;
  }

  // onpremises_sam_account_name - computed: true, optional: false, required: false
  public get onpremisesSamAccountName() {
    return this.getStringAttribute('onpremises_sam_account_name');
  }

  // onpremises_security_identifier - computed: true, optional: false, required: false
  public get onpremisesSecurityIdentifier() {
    return this.getStringAttribute('onpremises_security_identifier');
  }

  // onpremises_sync_enabled - computed: true, optional: false, required: false
  public get onpremisesSyncEnabled() {
    return this.getBooleanAttribute('onpremises_sync_enabled');
  }

  // onpremises_user_principal_name - computed: true, optional: false, required: false
  public get onpremisesUserPrincipalName() {
    return this.getStringAttribute('onpremises_user_principal_name');
  }

  // other_mails - computed: false, optional: true, required: false
  private _otherMails?: string[]; 
  public get otherMails() {
    return cdktf.Fn.tolist(this.getListAttribute('other_mails'));
  }
  public set otherMails(value: string[]) {
    this._otherMails = value;
  }
  public resetOtherMails() {
    this._otherMails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherMailsInput() {
    return this._otherMails;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // postal_code - computed: false, optional: true, required: false
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  public resetPostalCode() {
    this._postalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // preferred_language - computed: false, optional: true, required: false
  private _preferredLanguage?: string; 
  public get preferredLanguage() {
    return this.getStringAttribute('preferred_language');
  }
  public set preferredLanguage(value: string) {
    this._preferredLanguage = value;
  }
  public resetPreferredLanguage() {
    this._preferredLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLanguageInput() {
    return this._preferredLanguage;
  }

  // proxy_addresses - computed: true, optional: false, required: false
  public get proxyAddresses() {
    return this.getListAttribute('proxy_addresses');
  }

  // show_in_address_list - computed: false, optional: true, required: false
  private _showInAddressList?: boolean | cdktf.IResolvable; 
  public get showInAddressList() {
    return this.getBooleanAttribute('show_in_address_list');
  }
  public set showInAddressList(value: boolean | cdktf.IResolvable) {
    this._showInAddressList = value;
  }
  public resetShowInAddressList() {
    this._showInAddressList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInAddressListInput() {
    return this._showInAddressList;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // street_address - computed: false, optional: true, required: false
  private _streetAddress?: string; 
  public get streetAddress() {
    return this.getStringAttribute('street_address');
  }
  public set streetAddress(value: string) {
    this._streetAddress = value;
  }
  public resetStreetAddress() {
    this._streetAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetAddressInput() {
    return this._streetAddress;
  }

  // surname - computed: false, optional: true, required: false
  private _surname?: string; 
  public get surname() {
    return this.getStringAttribute('surname');
  }
  public set surname(value: string) {
    this._surname = value;
  }
  public resetSurname() {
    this._surname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surnameInput() {
    return this._surname;
  }

  // usage_location - computed: false, optional: true, required: false
  private _usageLocation?: string; 
  public get usageLocation() {
    return this.getStringAttribute('usage_location');
  }
  public set usageLocation(value: string) {
    this._usageLocation = value;
  }
  public resetUsageLocation() {
    this._usageLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageLocationInput() {
    return this._usageLocation;
  }

  // user_principal_name - computed: false, optional: false, required: true
  private _userPrincipalName?: string; 
  public get userPrincipalName() {
    return this.getStringAttribute('user_principal_name');
  }
  public set userPrincipalName(value: string) {
    this._userPrincipalName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPrincipalNameInput() {
    return this._userPrincipalName;
  }

  // user_type - computed: true, optional: false, required: false
  public get userType() {
    return this.getStringAttribute('user_type');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new UserTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: UserTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_enabled: cdktf.booleanToTerraform(this._accountEnabled),
      age_group: cdktf.stringToTerraform(this._ageGroup),
      business_phones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._businessPhones),
      city: cdktf.stringToTerraform(this._city),
      company_name: cdktf.stringToTerraform(this._companyName),
      consent_provided_for_minor: cdktf.stringToTerraform(this._consentProvidedForMinor),
      cost_center: cdktf.stringToTerraform(this._costCenter),
      country: cdktf.stringToTerraform(this._country),
      department: cdktf.stringToTerraform(this._department),
      disable_password_expiration: cdktf.booleanToTerraform(this._disablePasswordExpiration),
      disable_strong_password: cdktf.booleanToTerraform(this._disableStrongPassword),
      display_name: cdktf.stringToTerraform(this._displayName),
      division: cdktf.stringToTerraform(this._division),
      employee_id: cdktf.stringToTerraform(this._employeeId),
      employee_type: cdktf.stringToTerraform(this._employeeType),
      fax_number: cdktf.stringToTerraform(this._faxNumber),
      force_password_change: cdktf.booleanToTerraform(this._forcePasswordChange),
      given_name: cdktf.stringToTerraform(this._givenName),
      id: cdktf.stringToTerraform(this._id),
      job_title: cdktf.stringToTerraform(this._jobTitle),
      mail: cdktf.stringToTerraform(this._mail),
      mail_nickname: cdktf.stringToTerraform(this._mailNickname),
      manager_id: cdktf.stringToTerraform(this._managerId),
      mobile_phone: cdktf.stringToTerraform(this._mobilePhone),
      office_location: cdktf.stringToTerraform(this._officeLocation),
      onpremises_immutable_id: cdktf.stringToTerraform(this._onpremisesImmutableId),
      other_mails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._otherMails),
      password: cdktf.stringToTerraform(this._password),
      postal_code: cdktf.stringToTerraform(this._postalCode),
      preferred_language: cdktf.stringToTerraform(this._preferredLanguage),
      show_in_address_list: cdktf.booleanToTerraform(this._showInAddressList),
      state: cdktf.stringToTerraform(this._state),
      street_address: cdktf.stringToTerraform(this._streetAddress),
      surname: cdktf.stringToTerraform(this._surname),
      usage_location: cdktf.stringToTerraform(this._usageLocation),
      user_principal_name: cdktf.stringToTerraform(this._userPrincipalName),
      timeouts: userTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
