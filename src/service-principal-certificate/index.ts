// https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicePrincipalCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the encoding used for the supplied certificate data
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate#encoding ServicePrincipalCertificate#encoding}
  */
  readonly encoding?: string;
  /**
  * The end date until which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate#end_date ServicePrincipalCertificate#end_date}
  */
  readonly endDate?: string;
  /**
  * A relative duration for which the certificate is valid until, for example `240h` (10 days) or `2400h30m`. Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate#end_date_relative ServicePrincipalCertificate#end_date_relative}
  */
  readonly endDateRelative?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate#id ServicePrincipalCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A UUID used to uniquely identify this certificate. If not specified a UUID will be automatically generated
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate#key_id ServicePrincipalCertificate#key_id}
  */
  readonly keyId?: string;
  /**
  * The object ID of the service principal for which this certificate should be created
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate#service_principal_id ServicePrincipalCertificate#service_principal_id}
  */
  readonly servicePrincipalId: string;
  /**
  * The start date from which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If this isn't specified, the current date is used
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate#start_date ServicePrincipalCertificate#start_date}
  */
  readonly startDate?: string;
  /**
  * The type of key/certificate
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate#type ServicePrincipalCertificate#type}
  */
  readonly type?: string;
  /**
  * The certificate data, which can be PEM encoded, base64 encoded DER or hexadecimal encoded DER
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate#value ServicePrincipalCertificate#value}
  */
  readonly value: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate#timeouts ServicePrincipalCertificate#timeouts}
  */
  readonly timeouts?: ServicePrincipalCertificateTimeouts;
}
export interface ServicePrincipalCertificateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate#create ServicePrincipalCertificate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate#delete ServicePrincipalCertificate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate#read ServicePrincipalCertificate#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate#update ServicePrincipalCertificate#update}
  */
  readonly update?: string;
}

export function servicePrincipalCertificateTimeoutsToTerraform(struct?: ServicePrincipalCertificateTimeoutsOutputReference | ServicePrincipalCertificateTimeouts | cdktf.IResolvable): any {
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

export class ServicePrincipalCertificateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePrincipalCertificateTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServicePrincipalCertificateTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate azuread_service_principal_certificate}
*/
export class ServicePrincipalCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_service_principal_certificate";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_certificate azuread_service_principal_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicePrincipalCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: ServicePrincipalCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_service_principal_certificate',
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
    this._encoding = config.encoding;
    this._endDate = config.endDate;
    this._endDateRelative = config.endDateRelative;
    this._id = config.id;
    this._keyId = config.keyId;
    this._servicePrincipalId = config.servicePrincipalId;
    this._startDate = config.startDate;
    this._type = config.type;
    this._value = config.value;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // end_date - computed: true, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
  }

  // end_date_relative - computed: false, optional: true, required: false
  private _endDateRelative?: string; 
  public get endDateRelative() {
    return this.getStringAttribute('end_date_relative');
  }
  public set endDateRelative(value: string) {
    this._endDateRelative = value;
  }
  public resetEndDateRelative() {
    this._endDateRelative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateRelativeInput() {
    return this._endDateRelative;
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

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
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
    return this._servicePrincipalId;
  }

  // start_date - computed: true, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServicePrincipalCertificateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServicePrincipalCertificateTimeouts) {
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
      encoding: cdktf.stringToTerraform(this._encoding),
      end_date: cdktf.stringToTerraform(this._endDate),
      end_date_relative: cdktf.stringToTerraform(this._endDateRelative),
      id: cdktf.stringToTerraform(this._id),
      key_id: cdktf.stringToTerraform(this._keyId),
      service_principal_id: cdktf.stringToTerraform(this._servicePrincipalId),
      start_date: cdktf.stringToTerraform(this._startDate),
      type: cdktf.stringToTerraform(this._type),
      value: cdktf.stringToTerraform(this._value),
      timeouts: servicePrincipalCertificateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
