// https://www.terraform.io/docs/providers/azuread/d/users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzureadUsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Ignore missing users and return users that were found. The data source will still fail if no users are found
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/users#ignore_missing DataAzureadUsers#ignore_missing}
  */
  readonly ignoreMissing?: boolean | cdktf.IResolvable;
  /**
  * The email aliases of the users
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/users#mail_nicknames DataAzureadUsers#mail_nicknames}
  */
  readonly mailNicknames?: string[];
  /**
  * The object IDs of the users
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/users#object_ids DataAzureadUsers#object_ids}
  */
  readonly objectIds?: string[];
  /**
  * Fetch all users with no filter and return all that were found. The data source will still fail if no users are found.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/users#return_all DataAzureadUsers#return_all}
  */
  readonly returnAll?: boolean | cdktf.IResolvable;
  /**
  * The user principal names (UPNs) of the users
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/users#user_principal_names DataAzureadUsers#user_principal_names}
  */
  readonly userPrincipalNames?: string[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/users#timeouts DataAzureadUsers#timeouts}
  */
  readonly timeouts?: DataAzureadUsersTimeouts;
}
export class DataAzureadUsersUsers extends cdktf.ComplexComputedList {

  // account_enabled - computed: true, optional: false, required: false
  public get accountEnabled() {
    return this.getBooleanAttribute('account_enabled') as any;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // mail - computed: true, optional: false, required: false
  public get mail() {
    return this.getStringAttribute('mail');
  }

  // mail_nickname - computed: true, optional: false, required: false
  public get mailNickname() {
    return this.getStringAttribute('mail_nickname');
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // onpremises_immutable_id - computed: true, optional: false, required: false
  public get onpremisesImmutableId() {
    return this.getStringAttribute('onpremises_immutable_id');
  }

  // onpremises_sam_account_name - computed: true, optional: false, required: false
  public get onpremisesSamAccountName() {
    return this.getStringAttribute('onpremises_sam_account_name');
  }

  // onpremises_user_principal_name - computed: true, optional: false, required: false
  public get onpremisesUserPrincipalName() {
    return this.getStringAttribute('onpremises_user_principal_name');
  }

  // usage_location - computed: true, optional: false, required: false
  public get usageLocation() {
    return this.getStringAttribute('usage_location');
  }

  // user_principal_name - computed: true, optional: false, required: false
  public get userPrincipalName() {
    return this.getStringAttribute('user_principal_name');
  }
}
export interface DataAzureadUsersTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/users#read DataAzureadUsers#read}
  */
  readonly read?: string;
}

export function dataAzureadUsersTimeoutsToTerraform(struct?: DataAzureadUsersTimeoutsOutputReference | DataAzureadUsersTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzureadUsersTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataAzureadUsersTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzureadUsersTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._read = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/azuread/d/users azuread_users}
*/
export class DataAzureadUsers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azuread_users";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/d/users azuread_users} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzureadUsersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAzureadUsersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azuread_users',
      terraformGeneratorMetadata: {
        providerName: 'azuread'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._ignoreMissing = config.ignoreMissing;
    this._mailNicknames = config.mailNicknames;
    this._objectIds = config.objectIds;
    this._returnAll = config.returnAll;
    this._userPrincipalNames = config.userPrincipalNames;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_missing - computed: false, optional: true, required: false
  private _ignoreMissing?: boolean | cdktf.IResolvable; 
  public get ignoreMissing() {
    return this.getBooleanAttribute('ignore_missing') as any;
  }
  public set ignoreMissing(value: boolean | cdktf.IResolvable) {
    this._ignoreMissing = value;
  }
  public resetIgnoreMissing() {
    this._ignoreMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingInput() {
    return this._ignoreMissing;
  }

  // mail_nicknames - computed: true, optional: true, required: false
  private _mailNicknames?: string[]; 
  public get mailNicknames() {
    return this.getListAttribute('mail_nicknames');
  }
  public set mailNicknames(value: string[]) {
    this._mailNicknames = value;
  }
  public resetMailNicknames() {
    this._mailNicknames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailNicknamesInput() {
    return this._mailNicknames;
  }

  // object_ids - computed: true, optional: true, required: false
  private _objectIds?: string[]; 
  public get objectIds() {
    return this.getListAttribute('object_ids');
  }
  public set objectIds(value: string[]) {
    this._objectIds = value;
  }
  public resetObjectIds() {
    this._objectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdsInput() {
    return this._objectIds;
  }

  // return_all - computed: false, optional: true, required: false
  private _returnAll?: boolean | cdktf.IResolvable; 
  public get returnAll() {
    return this.getBooleanAttribute('return_all') as any;
  }
  public set returnAll(value: boolean | cdktf.IResolvable) {
    this._returnAll = value;
  }
  public resetReturnAll() {
    this._returnAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnAllInput() {
    return this._returnAll;
  }

  // user_principal_names - computed: true, optional: true, required: false
  private _userPrincipalNames?: string[]; 
  public get userPrincipalNames() {
    return this.getListAttribute('user_principal_names');
  }
  public set userPrincipalNames(value: string[]) {
    this._userPrincipalNames = value;
  }
  public resetUserPrincipalNames() {
    this._userPrincipalNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPrincipalNamesInput() {
    return this._userPrincipalNames;
  }

  // users - computed: true, optional: false, required: false
  public users(index: string) {
    return new DataAzureadUsersUsers(this, 'users', index);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzureadUsersTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzureadUsersTimeouts) {
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
      ignore_missing: cdktf.booleanToTerraform(this._ignoreMissing),
      mail_nicknames: cdktf.listMapper(cdktf.stringToTerraform)(this._mailNicknames),
      object_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._objectIds),
      return_all: cdktf.booleanToTerraform(this._returnAll),
      user_principal_names: cdktf.listMapper(cdktf.stringToTerraform)(this._userPrincipalNames),
      timeouts: dataAzureadUsersTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
