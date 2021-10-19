// https://www.terraform.io/docs/providers/azuread/r/service_principal_password.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicePrincipalPasswordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Arbitrary map of values that, when changed, will trigger rotation of the password
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_password.html#rotate_when_changed ServicePrincipalPassword#rotate_when_changed}
  */
  readonly rotateWhenChanged?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The object ID of the service principal for which this password should be created
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_password.html#service_principal_id ServicePrincipalPassword#service_principal_id}
  */
  readonly servicePrincipalId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_password.html#timeouts ServicePrincipalPassword#timeouts}
  */
  readonly timeouts?: ServicePrincipalPasswordTimeouts;
}
export interface ServicePrincipalPasswordTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_password.html#create ServicePrincipalPassword#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_password.html#delete ServicePrincipalPassword#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_password.html#read ServicePrincipalPassword#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_password.html#update ServicePrincipalPassword#update}
  */
  readonly update?: string;
}

function servicePrincipalPasswordTimeoutsToTerraform(struct?: ServicePrincipalPasswordTimeoutsOutputReference | ServicePrincipalPasswordTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class ServicePrincipalPasswordTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_password.html azuread_service_principal_password}
*/
export class ServicePrincipalPassword extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azuread_service_principal_password";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_password.html azuread_service_principal_password} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicePrincipalPasswordConfig
  */
  public constructor(scope: Construct, id: string, config: ServicePrincipalPasswordConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_service_principal_password',
      terraformGeneratorMetadata: {
        providerName: 'azuread'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._rotateWhenChanged = config.rotateWhenChanged;
    this._servicePrincipalId = config.servicePrincipalId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // rotate_when_changed - computed: false, optional: true, required: false
  private _rotateWhenChanged?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get rotateWhenChanged() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rotate_when_changed') as any;
  }
  public set rotateWhenChanged(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._rotateWhenChanged = value;
  }
  public resetRotateWhenChanged() {
    this._rotateWhenChanged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateWhenChangedInput() {
    return this._rotateWhenChanged
  }

  // service_principal_id - computed: false, optional: false, required: true
  private _servicePrincipalId?: string; 
  public get servicePrincipalId() {
    return this.getStringAttribute('service_principal_id');
  }
  public set servicePrincipalId(value: string) {
    this._servicePrincipalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalIdInput() {
    return this._servicePrincipalId
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServicePrincipalPasswordTimeouts | undefined; 
  private __timeoutsOutput = new ServicePrincipalPasswordTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ServicePrincipalPasswordTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      rotate_when_changed: cdktf.hashMapper(cdktf.anyToTerraform)(this._rotateWhenChanged),
      service_principal_id: cdktf.stringToTerraform(this._servicePrincipalId),
      timeouts: servicePrincipalPasswordTimeoutsToTerraform(this._timeouts),
    };
  }
}
