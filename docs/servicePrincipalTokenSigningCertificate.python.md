# `servicePrincipalTokenSigningCertificate` Submodule <a name="`servicePrincipalTokenSigningCertificate` Submodule" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePrincipalTokenSigningCertificate <a name="ServicePrincipalTokenSigningCertificate" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/service_principal_token_signing_certificate azuread_service_principal_token_signing_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import service_principal_token_signing_certificate

servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service_principal_id: str,
  display_name: str = None,
  end_date: str = None,
  id: str = None,
  timeouts: ServicePrincipalTokenSigningCertificateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.servicePrincipalId">service_principal_id</a></code> | <code>str</code> | The ID of the service principal for which this certificate should be created. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | A friendly name for the certificate. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.endDate">end_date</a></code> | <code>str</code> | The end date until which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). Default is 3 years from current date. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/service_principal_token_signing_certificate#id ServicePrincipalTokenSigningCertificate#id}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts">ServicePrincipalTokenSigningCertificateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.servicePrincipalId"></a>

- *Type:* str

The ID of the service principal for which this certificate should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/service_principal_token_signing_certificate#service_principal_id ServicePrincipalTokenSigningCertificate#service_principal_id}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.displayName"></a>

- *Type:* str

A friendly name for the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/service_principal_token_signing_certificate#display_name ServicePrincipalTokenSigningCertificate#display_name}

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.endDate"></a>

- *Type:* str

The end date until which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). Default is 3 years from current date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/service_principal_token_signing_certificate#end_date ServicePrincipalTokenSigningCertificate#end_date}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/service_principal_token_signing_certificate#id ServicePrincipalTokenSigningCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts">ServicePrincipalTokenSigningCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/service_principal_token_signing_certificate#timeouts ServicePrincipalTokenSigningCertificate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetEndDate">reset_end_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/service_principal_token_signing_certificate#create ServicePrincipalTokenSigningCertificate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/service_principal_token_signing_certificate#delete ServicePrincipalTokenSigningCertificate#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/service_principal_token_signing_certificate#read ServicePrincipalTokenSigningCertificate#read}.

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_end_date` <a name="reset_end_date" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetEndDate"></a>

```python
def reset_end_date() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServicePrincipalTokenSigningCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import service_principal_token_signing_certificate

servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import service_principal_token_signing_certificate

servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azuread import service_principal_token_signing_certificate

servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import service_principal_token_signing_certificate

servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServicePrincipalTokenSigningCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServicePrincipalTokenSigningCertificate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServicePrincipalTokenSigningCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/service_principal_token_signing_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServicePrincipalTokenSigningCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.thumbprint">thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference">ServicePrincipalTokenSigningCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.endDateInput">end_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.servicePrincipalIdInput">service_principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts">ServicePrincipalTokenSigningCertificateTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.servicePrincipalId">service_principal_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.timeouts"></a>

```python
timeouts: ServicePrincipalTokenSigningCertificateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference">ServicePrincipalTokenSigningCertificateTimeoutsOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `end_date_input`<sup>Optional</sup> <a name="end_date_input" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.endDateInput"></a>

```python
end_date_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `service_principal_id_input`<sup>Optional</sup> <a name="service_principal_id_input" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.servicePrincipalIdInput"></a>

```python
service_principal_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ServicePrincipalTokenSigningCertificateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts">ServicePrincipalTokenSigningCertificateTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.servicePrincipalId"></a>

```python
service_principal_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePrincipalTokenSigningCertificateConfig <a name="ServicePrincipalTokenSigningCertificateConfig" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import service_principal_token_signing_certificate

servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service_principal_id: str,
  display_name: str = None,
  end_date: str = None,
  id: str = None,
  timeouts: ServicePrincipalTokenSigningCertificateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.servicePrincipalId">service_principal_id</a></code> | <code>str</code> | The ID of the service principal for which this certificate should be created. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.displayName">display_name</a></code> | <code>str</code> | A friendly name for the certificate. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.endDate">end_date</a></code> | <code>str</code> | The end date until which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). Default is 3 years from current date. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/service_principal_token_signing_certificate#id ServicePrincipalTokenSigningCertificate#id}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts">ServicePrincipalTokenSigningCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.servicePrincipalId"></a>

```python
service_principal_id: str
```

- *Type:* str

The ID of the service principal for which this certificate should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/service_principal_token_signing_certificate#service_principal_id ServicePrincipalTokenSigningCertificate#service_principal_id}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A friendly name for the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/service_principal_token_signing_certificate#display_name ServicePrincipalTokenSigningCertificate#display_name}

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

The end date until which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). Default is 3 years from current date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/service_principal_token_signing_certificate#end_date ServicePrincipalTokenSigningCertificate#end_date}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/service_principal_token_signing_certificate#id ServicePrincipalTokenSigningCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.timeouts"></a>

```python
timeouts: ServicePrincipalTokenSigningCertificateTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts">ServicePrincipalTokenSigningCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/service_principal_token_signing_certificate#timeouts ServicePrincipalTokenSigningCertificate#timeouts}

---

### ServicePrincipalTokenSigningCertificateTimeouts <a name="ServicePrincipalTokenSigningCertificateTimeouts" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import service_principal_token_signing_certificate

servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/service_principal_token_signing_certificate#create ServicePrincipalTokenSigningCertificate#create}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/service_principal_token_signing_certificate#delete ServicePrincipalTokenSigningCertificate#delete}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/service_principal_token_signing_certificate#read ServicePrincipalTokenSigningCertificate#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/service_principal_token_signing_certificate#create ServicePrincipalTokenSigningCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/service_principal_token_signing_certificate#delete ServicePrincipalTokenSigningCertificate#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/service_principal_token_signing_certificate#read ServicePrincipalTokenSigningCertificate#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicePrincipalTokenSigningCertificateTimeoutsOutputReference <a name="ServicePrincipalTokenSigningCertificateTimeoutsOutputReference" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import service_principal_token_signing_certificate

servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts">ServicePrincipalTokenSigningCertificateTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServicePrincipalTokenSigningCertificateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts">ServicePrincipalTokenSigningCertificateTimeouts</a>]

---



