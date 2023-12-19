// https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/data-sources/groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzureadGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Common display name prefix of the groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/data-sources/groups#display_name_prefix DataAzureadGroups#display_name_prefix}
  */
  readonly displayNamePrefix?: string;
  /**
  * The display names of the groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/data-sources/groups#display_names DataAzureadGroups#display_names}
  */
  readonly displayNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/data-sources/groups#id DataAzureadGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ignore missing groups and return groups that were found. The data source will still fail if no groups are found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/data-sources/groups#ignore_missing DataAzureadGroups#ignore_missing}
  */
  readonly ignoreMissing?: boolean | cdktf.IResolvable;
  /**
  * Whether the groups are mail-enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/data-sources/groups#mail_enabled DataAzureadGroups#mail_enabled}
  */
  readonly mailEnabled?: boolean | cdktf.IResolvable;
  /**
  * The object IDs of the groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/data-sources/groups#object_ids DataAzureadGroups#object_ids}
  */
  readonly objectIds?: string[];
  /**
  * Retrieve all groups with no filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/data-sources/groups#return_all DataAzureadGroups#return_all}
  */
  readonly returnAll?: boolean | cdktf.IResolvable;
  /**
  * Whether the groups are security-enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/data-sources/groups#security_enabled DataAzureadGroups#security_enabled}
  */
  readonly securityEnabled?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/data-sources/groups#timeouts DataAzureadGroups#timeouts}
  */
  readonly timeouts?: DataAzureadGroupsTimeouts;
}
export interface DataAzureadGroupsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/data-sources/groups#read DataAzureadGroups#read}
  */
  readonly read?: string;
}

export function dataAzureadGroupsTimeoutsToTerraform(struct?: DataAzureadGroupsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzureadGroupsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzureadGroupsTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataAzureadGroupsTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/data-sources/groups azuread_groups}
*/
export class DataAzureadGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzureadGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzureadGroups to import
  * @param importFromId The id of the existing DataAzureadGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/data-sources/groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzureadGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuread_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/data-sources/groups azuread_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzureadGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAzureadGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azuread_groups',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '2.47.0',
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
    this._displayNamePrefix = config.displayNamePrefix;
    this._displayNames = config.displayNames;
    this._id = config.id;
    this._ignoreMissing = config.ignoreMissing;
    this._mailEnabled = config.mailEnabled;
    this._objectIds = config.objectIds;
    this._returnAll = config.returnAll;
    this._securityEnabled = config.securityEnabled;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name_prefix - computed: true, optional: true, required: false
  private _displayNamePrefix?: string; 
  public get displayNamePrefix() {
    return this.getStringAttribute('display_name_prefix');
  }
  public set displayNamePrefix(value: string) {
    this._displayNamePrefix = value;
  }
  public resetDisplayNamePrefix() {
    this._displayNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNamePrefixInput() {
    return this._displayNamePrefix;
  }

  // display_names - computed: true, optional: true, required: false
  private _displayNames?: string[]; 
  public get displayNames() {
    return this.getListAttribute('display_names');
  }
  public set displayNames(value: string[]) {
    this._displayNames = value;
  }
  public resetDisplayNames() {
    this._displayNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNamesInput() {
    return this._displayNames;
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

  // ignore_missing - computed: false, optional: true, required: false
  private _ignoreMissing?: boolean | cdktf.IResolvable; 
  public get ignoreMissing() {
    return this.getBooleanAttribute('ignore_missing');
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

  // mail_enabled - computed: true, optional: true, required: false
  private _mailEnabled?: boolean | cdktf.IResolvable; 
  public get mailEnabled() {
    return this.getBooleanAttribute('mail_enabled');
  }
  public set mailEnabled(value: boolean | cdktf.IResolvable) {
    this._mailEnabled = value;
  }
  public resetMailEnabled() {
    this._mailEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailEnabledInput() {
    return this._mailEnabled;
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
    return this.getBooleanAttribute('return_all');
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

  // security_enabled - computed: true, optional: true, required: false
  private _securityEnabled?: boolean | cdktf.IResolvable; 
  public get securityEnabled() {
    return this.getBooleanAttribute('security_enabled');
  }
  public set securityEnabled(value: boolean | cdktf.IResolvable) {
    this._securityEnabled = value;
  }
  public resetSecurityEnabled() {
    this._securityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityEnabledInput() {
    return this._securityEnabled;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzureadGroupsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzureadGroupsTimeouts) {
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
      display_name_prefix: cdktf.stringToTerraform(this._displayNamePrefix),
      display_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._displayNames),
      id: cdktf.stringToTerraform(this._id),
      ignore_missing: cdktf.booleanToTerraform(this._ignoreMissing),
      mail_enabled: cdktf.booleanToTerraform(this._mailEnabled),
      object_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._objectIds),
      return_all: cdktf.booleanToTerraform(this._returnAll),
      security_enabled: cdktf.booleanToTerraform(this._securityEnabled),
      timeouts: dataAzureadGroupsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
