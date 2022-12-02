// https://www.terraform.io/docs/providers/azuread/d/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzureadUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/user#id DataAzureadUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The email alias of the user
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/user#mail_nickname DataAzureadUser#mail_nickname}
  */
  readonly mailNickname?: string;
  /**
  * The object ID of the user
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/user#object_id DataAzureadUser#object_id}
  */
  readonly objectId?: string;
  /**
  * The user principal name (UPN) of the user
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/user#user_principal_name DataAzureadUser#user_principal_name}
  */
  readonly userPrincipalName?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/user#timeouts DataAzureadUser#timeouts}
  */
  readonly timeouts?: DataAzureadUserTimeouts;
}
export interface DataAzureadUserTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/user#read DataAzureadUser#read}
  */
  readonly read?: string;
}

export function dataAzureadUserTimeoutsToTerraform(struct?: DataAzureadUserTimeoutsOutputReference | DataAzureadUserTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzureadUserTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAzureadUserTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzureadUserTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/d/user azuread_user}
*/
export class DataAzureadUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/d/user azuread_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzureadUserConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAzureadUserConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azuread_user',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '2.31.0',
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
    this._id = config.id;
    this._mailNickname = config.mailNickname;
    this._objectId = config.objectId;
    this._userPrincipalName = config.userPrincipalName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_enabled - computed: true, optional: false, required: false
  public get accountEnabled() {
    return this.getBooleanAttribute('account_enabled');
  }

  // age_group - computed: true, optional: false, required: false
  public get ageGroup() {
    return this.getStringAttribute('age_group');
  }

  // business_phones - computed: true, optional: false, required: false
  public get businessPhones() {
    return this.getListAttribute('business_phones');
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // company_name - computed: true, optional: false, required: false
  public get companyName() {
    return this.getStringAttribute('company_name');
  }

  // consent_provided_for_minor - computed: true, optional: false, required: false
  public get consentProvidedForMinor() {
    return this.getStringAttribute('consent_provided_for_minor');
  }

  // cost_center - computed: true, optional: false, required: false
  public get costCenter() {
    return this.getStringAttribute('cost_center');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // creation_type - computed: true, optional: false, required: false
  public get creationType() {
    return this.getStringAttribute('creation_type');
  }

  // department - computed: true, optional: false, required: false
  public get department() {
    return this.getStringAttribute('department');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // division - computed: true, optional: false, required: false
  public get division() {
    return this.getStringAttribute('division');
  }

  // employee_id - computed: true, optional: false, required: false
  public get employeeId() {
    return this.getStringAttribute('employee_id');
  }

  // employee_type - computed: true, optional: false, required: false
  public get employeeType() {
    return this.getStringAttribute('employee_type');
  }

  // external_user_state - computed: true, optional: false, required: false
  public get externalUserState() {
    return this.getStringAttribute('external_user_state');
  }

  // fax_number - computed: true, optional: false, required: false
  public get faxNumber() {
    return this.getStringAttribute('fax_number');
  }

  // given_name - computed: true, optional: false, required: false
  public get givenName() {
    return this.getStringAttribute('given_name');
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

  // job_title - computed: true, optional: false, required: false
  public get jobTitle() {
    return this.getStringAttribute('job_title');
  }

  // mail - computed: true, optional: false, required: false
  public get mail() {
    return this.getStringAttribute('mail');
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

  // manager_id - computed: true, optional: false, required: false
  public get managerId() {
    return this.getStringAttribute('manager_id');
  }

  // mobile_phone - computed: true, optional: false, required: false
  public get mobilePhone() {
    return this.getStringAttribute('mobile_phone');
  }

  // object_id - computed: true, optional: true, required: false
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  public resetObjectId() {
    this._objectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // office_location - computed: true, optional: false, required: false
  public get officeLocation() {
    return this.getStringAttribute('office_location');
  }

  // onpremises_distinguished_name - computed: true, optional: false, required: false
  public get onpremisesDistinguishedName() {
    return this.getStringAttribute('onpremises_distinguished_name');
  }

  // onpremises_domain_name - computed: true, optional: false, required: false
  public get onpremisesDomainName() {
    return this.getStringAttribute('onpremises_domain_name');
  }

  // onpremises_immutable_id - computed: true, optional: false, required: false
  public get onpremisesImmutableId() {
    return this.getStringAttribute('onpremises_immutable_id');
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

  // other_mails - computed: true, optional: false, required: false
  public get otherMails() {
    return this.getListAttribute('other_mails');
  }

  // postal_code - computed: true, optional: false, required: false
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }

  // preferred_language - computed: true, optional: false, required: false
  public get preferredLanguage() {
    return this.getStringAttribute('preferred_language');
  }

  // proxy_addresses - computed: true, optional: false, required: false
  public get proxyAddresses() {
    return this.getListAttribute('proxy_addresses');
  }

  // show_in_address_list - computed: true, optional: false, required: false
  public get showInAddressList() {
    return this.getBooleanAttribute('show_in_address_list');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // street_address - computed: true, optional: false, required: false
  public get streetAddress() {
    return this.getStringAttribute('street_address');
  }

  // surname - computed: true, optional: false, required: false
  public get surname() {
    return this.getStringAttribute('surname');
  }

  // usage_location - computed: true, optional: false, required: false
  public get usageLocation() {
    return this.getStringAttribute('usage_location');
  }

  // user_principal_name - computed: true, optional: true, required: false
  private _userPrincipalName?: string; 
  public get userPrincipalName() {
    return this.getStringAttribute('user_principal_name');
  }
  public set userPrincipalName(value: string) {
    this._userPrincipalName = value;
  }
  public resetUserPrincipalName() {
    this._userPrincipalName = undefined;
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
  private _timeouts = new DataAzureadUserTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzureadUserTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      mail_nickname: cdktf.stringToTerraform(this._mailNickname),
      object_id: cdktf.stringToTerraform(this._objectId),
      user_principal_name: cdktf.stringToTerraform(this._userPrincipalName),
      timeouts: dataAzureadUserTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
