# `azuread_application_certificate`

Refer to the Terraform Registory for docs: [`azuread_application_certificate`](https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate).

# `applicationCertificate` Submodule <a name="`applicationCertificate` Submodule" id="@cdktf/provider-azuread.applicationCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationCertificate <a name="ApplicationCertificate" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate azuread_application_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_certificate

applicationCertificate.ApplicationCertificate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  value: str,
  application_id: str = None,
  application_object_id: str = None,
  encoding: str = None,
  end_date: str = None,
  end_date_relative: str = None,
  id: str = None,
  key_id: str = None,
  start_date: str = None,
  timeouts: ApplicationCertificateTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.value">value</a></code> | <code>str</code> | The certificate data, which can be PEM encoded, base64 encoded DER or hexadecimal encoded DER. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | The resource ID of the application for which this certificate should be created. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.applicationObjectId">application_object_id</a></code> | <code>str</code> | The object ID of the application for which this certificate should be created. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.encoding">encoding</a></code> | <code>str</code> | Specifies the encoding used for the supplied certificate data. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.endDate">end_date</a></code> | <code>str</code> | The end date until which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If omitted, the API will decide a suitable expiry date, which is typically around 2 years from the start date. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.endDateRelative">end_date_relative</a></code> | <code>str</code> | A relative duration for which the certificate is valid until, for example `240h` (10 days) or `2400h30m`. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#id ApplicationCertificate#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.keyId">key_id</a></code> | <code>str</code> | A UUID used to uniquely identify this certificate. If omitted, a random UUID will be automatically generated. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.startDate">start_date</a></code> | <code>str</code> | The start date from which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If this isn't specified, the current date and time are use. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeouts">ApplicationCertificateTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of key/certificate. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.value"></a>

- *Type:* str

The certificate data, which can be PEM encoded, base64 encoded DER or hexadecimal encoded DER.

See also the `encoding` argument

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#value ApplicationCertificate#value}

---

##### `application_id`<sup>Optional</sup> <a name="application_id" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.applicationId"></a>

- *Type:* str

The resource ID of the application for which this certificate should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#application_id ApplicationCertificate#application_id}

---

##### `application_object_id`<sup>Optional</sup> <a name="application_object_id" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.applicationObjectId"></a>

- *Type:* str

The object ID of the application for which this certificate should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#application_object_id ApplicationCertificate#application_object_id}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.encoding"></a>

- *Type:* str

Specifies the encoding used for the supplied certificate data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#encoding ApplicationCertificate#encoding}

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.endDate"></a>

- *Type:* str

The end date until which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If omitted, the API will decide a suitable expiry date, which is typically around 2 years from the start date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#end_date ApplicationCertificate#end_date}

---

##### `end_date_relative`<sup>Optional</sup> <a name="end_date_relative" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.endDateRelative"></a>

- *Type:* str

A relative duration for which the certificate is valid until, for example `240h` (10 days) or `2400h30m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#end_date_relative ApplicationCertificate#end_date_relative}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#id ApplicationCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_id`<sup>Optional</sup> <a name="key_id" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.keyId"></a>

- *Type:* str

A UUID used to uniquely identify this certificate. If omitted, a random UUID will be automatically generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#key_id ApplicationCertificate#key_id}

---

##### `start_date`<sup>Optional</sup> <a name="start_date" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.startDate"></a>

- *Type:* str

The start date from which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If this isn't specified, the current date and time are use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#start_date ApplicationCertificate#start_date}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeouts">ApplicationCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#timeouts ApplicationCertificate#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.Initializer.parameter.type"></a>

- *Type:* str

The type of key/certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#type ApplicationCertificate#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.resetApplicationId">reset_application_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.resetApplicationObjectId">reset_application_object_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.resetEndDate">reset_end_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.resetEndDateRelative">reset_end_date_relative</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.resetKeyId">reset_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.resetStartDate">reset_start_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#create ApplicationCertificate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#delete ApplicationCertificate#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#read ApplicationCertificate#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#update ApplicationCertificate#update}.

---

##### `reset_application_id` <a name="reset_application_id" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.resetApplicationId"></a>

```python
def reset_application_id() -> None
```

##### `reset_application_object_id` <a name="reset_application_object_id" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.resetApplicationObjectId"></a>

```python
def reset_application_object_id() -> None
```

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_end_date` <a name="reset_end_date" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.resetEndDate"></a>

```python
def reset_end_date() -> None
```

##### `reset_end_date_relative` <a name="reset_end_date_relative" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.resetEndDateRelative"></a>

```python
def reset_end_date_relative() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_id` <a name="reset_key_id" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.resetKeyId"></a>

```python
def reset_key_id() -> None
```

##### `reset_start_date` <a name="reset_start_date" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.resetStartDate"></a>

```python
def reset_start_date() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApplicationCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import application_certificate

applicationCertificate.ApplicationCertificate.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import application_certificate

applicationCertificate.ApplicationCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azuread import application_certificate

applicationCertificate.ApplicationCertificate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import application_certificate

applicationCertificate.ApplicationCertificate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApplicationCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApplicationCertificate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApplicationCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference">ApplicationCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.applicationObjectIdInput">application_object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.endDateInput">end_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.endDateRelativeInput">end_date_relative_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.startDateInput">start_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeouts">ApplicationCertificateTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.applicationObjectId">application_object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.endDateRelative">end_date_relative</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.value">value</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.timeouts"></a>

```python
timeouts: ApplicationCertificateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference">ApplicationCertificateTimeoutsOutputReference</a>

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `application_object_id_input`<sup>Optional</sup> <a name="application_object_id_input" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.applicationObjectIdInput"></a>

```python
application_object_id_input: str
```

- *Type:* str

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `end_date_input`<sup>Optional</sup> <a name="end_date_input" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.endDateInput"></a>

```python
end_date_input: str
```

- *Type:* str

---

##### `end_date_relative_input`<sup>Optional</sup> <a name="end_date_relative_input" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.endDateRelativeInput"></a>

```python
end_date_relative_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `start_date_input`<sup>Optional</sup> <a name="start_date_input" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.startDateInput"></a>

```python
start_date_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApplicationCertificateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeouts">ApplicationCertificateTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `application_object_id`<sup>Required</sup> <a name="application_object_id" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.applicationObjectId"></a>

```python
application_object_id: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `end_date_relative`<sup>Required</sup> <a name="end_date_relative" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.endDateRelative"></a>

```python
end_date_relative: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.value"></a>

```python
value: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationCertificateConfig <a name="ApplicationCertificateConfig" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_certificate

applicationCertificate.ApplicationCertificateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  value: str,
  application_id: str = None,
  application_object_id: str = None,
  encoding: str = None,
  end_date: str = None,
  end_date_relative: str = None,
  id: str = None,
  key_id: str = None,
  start_date: str = None,
  timeouts: ApplicationCertificateTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.value">value</a></code> | <code>str</code> | The certificate data, which can be PEM encoded, base64 encoded DER or hexadecimal encoded DER. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.applicationId">application_id</a></code> | <code>str</code> | The resource ID of the application for which this certificate should be created. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.applicationObjectId">application_object_id</a></code> | <code>str</code> | The object ID of the application for which this certificate should be created. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.encoding">encoding</a></code> | <code>str</code> | Specifies the encoding used for the supplied certificate data. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.endDate">end_date</a></code> | <code>str</code> | The end date until which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If omitted, the API will decide a suitable expiry date, which is typically around 2 years from the start date. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.endDateRelative">end_date_relative</a></code> | <code>str</code> | A relative duration for which the certificate is valid until, for example `240h` (10 days) or `2400h30m`. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#id ApplicationCertificate#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.keyId">key_id</a></code> | <code>str</code> | A UUID used to uniquely identify this certificate. If omitted, a random UUID will be automatically generated. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.startDate">start_date</a></code> | <code>str</code> | The start date from which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If this isn't specified, the current date and time are use. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeouts">ApplicationCertificateTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.type">type</a></code> | <code>str</code> | The type of key/certificate. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.value"></a>

```python
value: str
```

- *Type:* str

The certificate data, which can be PEM encoded, base64 encoded DER or hexadecimal encoded DER.

See also the `encoding` argument

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#value ApplicationCertificate#value}

---

##### `application_id`<sup>Optional</sup> <a name="application_id" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

The resource ID of the application for which this certificate should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#application_id ApplicationCertificate#application_id}

---

##### `application_object_id`<sup>Optional</sup> <a name="application_object_id" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.applicationObjectId"></a>

```python
application_object_id: str
```

- *Type:* str

The object ID of the application for which this certificate should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#application_object_id ApplicationCertificate#application_object_id}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

Specifies the encoding used for the supplied certificate data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#encoding ApplicationCertificate#encoding}

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

The end date until which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If omitted, the API will decide a suitable expiry date, which is typically around 2 years from the start date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#end_date ApplicationCertificate#end_date}

---

##### `end_date_relative`<sup>Optional</sup> <a name="end_date_relative" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.endDateRelative"></a>

```python
end_date_relative: str
```

- *Type:* str

A relative duration for which the certificate is valid until, for example `240h` (10 days) or `2400h30m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#end_date_relative ApplicationCertificate#end_date_relative}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#id ApplicationCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_id`<sup>Optional</sup> <a name="key_id" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

A UUID used to uniquely identify this certificate. If omitted, a random UUID will be automatically generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#key_id ApplicationCertificate#key_id}

---

##### `start_date`<sup>Optional</sup> <a name="start_date" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

The start date from which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If this isn't specified, the current date and time are use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#start_date ApplicationCertificate#start_date}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.timeouts"></a>

```python
timeouts: ApplicationCertificateTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeouts">ApplicationCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#timeouts ApplicationCertificate#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of key/certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#type ApplicationCertificate#type}

---

### ApplicationCertificateTimeouts <a name="ApplicationCertificateTimeouts" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_certificate

applicationCertificate.ApplicationCertificateTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#create ApplicationCertificate#create}. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#delete ApplicationCertificate#delete}. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#read ApplicationCertificate#read}. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#update ApplicationCertificate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#create ApplicationCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#delete ApplicationCertificate#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#read ApplicationCertificate#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_certificate#update ApplicationCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationCertificateTimeoutsOutputReference <a name="ApplicationCertificateTimeoutsOutputReference" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_certificate

applicationCertificate.ApplicationCertificateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeouts">ApplicationCertificateTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApplicationCertificateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.applicationCertificate.ApplicationCertificateTimeouts">ApplicationCertificateTimeouts</a>]

---



