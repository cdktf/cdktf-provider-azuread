// https://www.terraform.io/docs/providers/azuread/d/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzureadGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The display name for the group
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/group#display_name DataAzureadGroup#display_name}
  */
  readonly displayName?: string;
  /**
  * Whether the group is mail-enabled
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/group#mail_enabled DataAzureadGroup#mail_enabled}
  */
  readonly mailEnabled?: boolean | cdktf.IResolvable;
  /**
  * The object ID of the group
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/group#object_id DataAzureadGroup#object_id}
  */
  readonly objectId?: string;
  /**
  * Whether the group is a security group
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/group#security_enabled DataAzureadGroup#security_enabled}
  */
  readonly securityEnabled?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/group#timeouts DataAzureadGroup#timeouts}
  */
  readonly timeouts?: DataAzureadGroupTimeouts;
}
export class DataAzureadGroupDynamicMembership extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }

  // rule - computed: true, optional: false, required: false
  public get rule() {
    return this.getStringAttribute('rule');
  }
}
export interface DataAzureadGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/group#read DataAzureadGroup#read}
  */
  readonly read?: string;
}

export function dataAzureadGroupTimeoutsToTerraform(struct?: DataAzureadGroupTimeoutsOutputReference | DataAzureadGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzureadGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataAzureadGroupTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzureadGroupTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azuread/d/group azuread_group}
*/
export class DataAzureadGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azuread_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/d/group azuread_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzureadGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAzureadGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azuread_group',
      terraformGeneratorMetadata: {
        providerName: 'azuread'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._mailEnabled = config.mailEnabled;
    this._objectId = config.objectId;
    this._securityEnabled = config.securityEnabled;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignable_to_role - computed: true, optional: false, required: false
  public get assignableToRole() {
    return this.getBooleanAttribute('assignable_to_role') as any;
  }

  // behaviors - computed: true, optional: false, required: false
  public get behaviors() {
    return this.getListAttribute('behaviors');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // dynamic_membership - computed: true, optional: false, required: false
  public dynamicMembership(index: string) {
    return new DataAzureadGroupDynamicMembership(this, 'dynamic_membership', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mail - computed: true, optional: false, required: false
  public get mail() {
    return this.getStringAttribute('mail');
  }

  // mail_enabled - computed: true, optional: true, required: false
  private _mailEnabled?: boolean | cdktf.IResolvable; 
  public get mailEnabled() {
    return this.getBooleanAttribute('mail_enabled') as any;
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

  // mail_nickname - computed: true, optional: false, required: false
  public get mailNickname() {
    return this.getStringAttribute('mail_nickname');
  }

  // members - computed: true, optional: false, required: false
  public get members() {
    return this.getListAttribute('members');
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

  // onpremises_domain_name - computed: true, optional: false, required: false
  public get onpremisesDomainName() {
    return this.getStringAttribute('onpremises_domain_name');
  }

  // onpremises_netbios_name - computed: true, optional: false, required: false
  public get onpremisesNetbiosName() {
    return this.getStringAttribute('onpremises_netbios_name');
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
    return this.getBooleanAttribute('onpremises_sync_enabled') as any;
  }

  // owners - computed: true, optional: false, required: false
  public get owners() {
    return this.getListAttribute('owners');
  }

  // preferred_language - computed: true, optional: false, required: false
  public get preferredLanguage() {
    return this.getStringAttribute('preferred_language');
  }

  // provisioning_options - computed: true, optional: false, required: false
  public get provisioningOptions() {
    return this.getListAttribute('provisioning_options');
  }

  // proxy_addresses - computed: true, optional: false, required: false
  public get proxyAddresses() {
    return this.getListAttribute('proxy_addresses');
  }

  // security_enabled - computed: true, optional: true, required: false
  private _securityEnabled?: boolean | cdktf.IResolvable; 
  public get securityEnabled() {
    return this.getBooleanAttribute('security_enabled') as any;
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

  // theme - computed: true, optional: false, required: false
  public get theme() {
    return this.getStringAttribute('theme');
  }

  // types - computed: true, optional: false, required: false
  public get types() {
    return this.getListAttribute('types');
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzureadGroupTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzureadGroupTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      mail_enabled: cdktf.booleanToTerraform(this._mailEnabled),
      object_id: cdktf.stringToTerraform(this._objectId),
      security_enabled: cdktf.booleanToTerraform(this._securityEnabled),
      timeouts: dataAzureadGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
