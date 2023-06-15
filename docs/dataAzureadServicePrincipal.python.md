# `data_azuread_service_principal`

Refer to the Terraform Registory for docs: [`data_azuread_service_principal`](https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/data-sources/service_principal).

# `dataAzureadServicePrincipal` Submodule <a name="`dataAzureadServicePrincipal` Submodule" id="@cdktf/provider-azuread.dataAzureadServicePrincipal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadServicePrincipal <a name="DataAzureadServicePrincipal" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/data-sources/service_principal azuread_service_principal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_service_principal

dataAzureadServicePrincipal.DataAzureadServicePrincipal(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str = None,
  display_name: str = None,
  id: str = None,
  object_id: str = None,
  timeouts: DataAzureadServicePrincipalTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | The application ID (client ID) of the application associated with this service principal. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the application associated with this service principal. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/data-sources/service_principal#id DataAzureadServicePrincipal#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.objectId">object_id</a></code> | <code>str</code> | The object ID of the service principal. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts">DataAzureadServicePrincipalTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Optional</sup> <a name="application_id" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.applicationId"></a>

- *Type:* str

The application ID (client ID) of the application associated with this service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/data-sources/service_principal#application_id DataAzureadServicePrincipal#application_id}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the application associated with this service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/data-sources/service_principal#display_name DataAzureadServicePrincipal#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/data-sources/service_principal#id DataAzureadServicePrincipal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `object_id`<sup>Optional</sup> <a name="object_id" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.objectId"></a>

- *Type:* str

The object ID of the service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/data-sources/service_principal#object_id DataAzureadServicePrincipal#object_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts">DataAzureadServicePrincipalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/data-sources/service_principal#timeouts DataAzureadServicePrincipal#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetApplicationId">reset_application_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetObjectId">reset_object_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/data-sources/service_principal#read DataAzureadServicePrincipal#read}.

---

##### `reset_application_id` <a name="reset_application_id" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetApplicationId"></a>

```python
def reset_application_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_object_id` <a name="reset_object_id" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetObjectId"></a>

```python
def reset_object_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_service_principal

dataAzureadServicePrincipal.DataAzureadServicePrincipal.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_service_principal

dataAzureadServicePrincipal.DataAzureadServicePrincipal.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_service_principal

dataAzureadServicePrincipal.DataAzureadServicePrincipal.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.accountEnabled">account_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.alternativeNames">alternative_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.applicationTenantId">application_tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.appRoleAssignmentRequired">app_role_assignment_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.appRoleIds">app_role_ids</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.appRoles">app_roles</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList">DataAzureadServicePrincipalAppRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.features">features</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList">DataAzureadServicePrincipalFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.featureTags">feature_tags</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList">DataAzureadServicePrincipalFeatureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.homepageUrl">homepage_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.loginUrl">login_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.logoutUrl">logout_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.notes">notes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.notificationEmailAddresses">notification_email_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.oauth2PermissionScopeIds">oauth2_permission_scope_ids</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.oauth2PermissionScopes">oauth2_permission_scopes</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList">DataAzureadServicePrincipalOauth2PermissionScopesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.preferredSingleSignOnMode">preferred_single_sign_on_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.redirectUris">redirect_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.samlMetadataUrl">saml_metadata_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.samlSingleSignOn">saml_single_sign_on</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList">DataAzureadServicePrincipalSamlSingleSignOnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.servicePrincipalNames">service_principal_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.signInAudience">sign_in_audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference">DataAzureadServicePrincipalTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts">DataAzureadServicePrincipalTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `account_enabled`<sup>Required</sup> <a name="account_enabled" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.accountEnabled"></a>

```python
account_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `alternative_names`<sup>Required</sup> <a name="alternative_names" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.alternativeNames"></a>

```python
alternative_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `application_tenant_id`<sup>Required</sup> <a name="application_tenant_id" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.applicationTenantId"></a>

```python
application_tenant_id: str
```

- *Type:* str

---

##### `app_role_assignment_required`<sup>Required</sup> <a name="app_role_assignment_required" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.appRoleAssignmentRequired"></a>

```python
app_role_assignment_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `app_role_ids`<sup>Required</sup> <a name="app_role_ids" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.appRoleIds"></a>

```python
app_role_ids: StringMap
```

- *Type:* cdktf.StringMap

---

##### `app_roles`<sup>Required</sup> <a name="app_roles" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.appRoles"></a>

```python
app_roles: DataAzureadServicePrincipalAppRolesList
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList">DataAzureadServicePrincipalAppRolesList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.features"></a>

```python
features: DataAzureadServicePrincipalFeaturesList
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList">DataAzureadServicePrincipalFeaturesList</a>

---

##### `feature_tags`<sup>Required</sup> <a name="feature_tags" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.featureTags"></a>

```python
feature_tags: DataAzureadServicePrincipalFeatureTagsList
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList">DataAzureadServicePrincipalFeatureTagsList</a>

---

##### `homepage_url`<sup>Required</sup> <a name="homepage_url" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.homepageUrl"></a>

```python
homepage_url: str
```

- *Type:* str

---

##### `login_url`<sup>Required</sup> <a name="login_url" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.loginUrl"></a>

```python
login_url: str
```

- *Type:* str

---

##### `logout_url`<sup>Required</sup> <a name="logout_url" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.logoutUrl"></a>

```python
logout_url: str
```

- *Type:* str

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.notes"></a>

```python
notes: str
```

- *Type:* str

---

##### `notification_email_addresses`<sup>Required</sup> <a name="notification_email_addresses" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.notificationEmailAddresses"></a>

```python
notification_email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `oauth2_permission_scope_ids`<sup>Required</sup> <a name="oauth2_permission_scope_ids" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.oauth2PermissionScopeIds"></a>

```python
oauth2_permission_scope_ids: StringMap
```

- *Type:* cdktf.StringMap

---

##### `oauth2_permission_scopes`<sup>Required</sup> <a name="oauth2_permission_scopes" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.oauth2PermissionScopes"></a>

```python
oauth2_permission_scopes: DataAzureadServicePrincipalOauth2PermissionScopesList
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList">DataAzureadServicePrincipalOauth2PermissionScopesList</a>

---

##### `preferred_single_sign_on_mode`<sup>Required</sup> <a name="preferred_single_sign_on_mode" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.preferredSingleSignOnMode"></a>

```python
preferred_single_sign_on_mode: str
```

- *Type:* str

---

##### `redirect_uris`<sup>Required</sup> <a name="redirect_uris" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.redirectUris"></a>

```python
redirect_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `saml_metadata_url`<sup>Required</sup> <a name="saml_metadata_url" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.samlMetadataUrl"></a>

```python
saml_metadata_url: str
```

- *Type:* str

---

##### `saml_single_sign_on`<sup>Required</sup> <a name="saml_single_sign_on" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.samlSingleSignOn"></a>

```python
saml_single_sign_on: DataAzureadServicePrincipalSamlSingleSignOnList
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList">DataAzureadServicePrincipalSamlSingleSignOnList</a>

---

##### `service_principal_names`<sup>Required</sup> <a name="service_principal_names" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.servicePrincipalNames"></a>

```python
service_principal_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sign_in_audience`<sup>Required</sup> <a name="sign_in_audience" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.signInAudience"></a>

```python
sign_in_audience: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.timeouts"></a>

```python
timeouts: DataAzureadServicePrincipalTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference">DataAzureadServicePrincipalTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzureadServicePrincipalTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts">DataAzureadServicePrincipalTimeouts</a>]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadServicePrincipalAppRoles <a name="DataAzureadServicePrincipalAppRoles" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRoles.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_service_principal

dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRoles()
```


### DataAzureadServicePrincipalConfig <a name="DataAzureadServicePrincipalConfig" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_service_principal

dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str = None,
  display_name: str = None,
  id: str = None,
  object_id: str = None,
  timeouts: DataAzureadServicePrincipalTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.applicationId">application_id</a></code> | <code>str</code> | The application ID (client ID) of the application associated with this service principal. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the application associated with this service principal. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/data-sources/service_principal#id DataAzureadServicePrincipal#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.objectId">object_id</a></code> | <code>str</code> | The object ID of the service principal. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts">DataAzureadServicePrincipalTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Optional</sup> <a name="application_id" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

The application ID (client ID) of the application associated with this service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/data-sources/service_principal#application_id DataAzureadServicePrincipal#application_id}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the application associated with this service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/data-sources/service_principal#display_name DataAzureadServicePrincipal#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/data-sources/service_principal#id DataAzureadServicePrincipal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `object_id`<sup>Optional</sup> <a name="object_id" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

The object ID of the service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/data-sources/service_principal#object_id DataAzureadServicePrincipal#object_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.timeouts"></a>

```python
timeouts: DataAzureadServicePrincipalTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts">DataAzureadServicePrincipalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/data-sources/service_principal#timeouts DataAzureadServicePrincipal#timeouts}

---

### DataAzureadServicePrincipalFeatures <a name="DataAzureadServicePrincipalFeatures" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatures.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_service_principal

dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatures()
```


### DataAzureadServicePrincipalFeatureTags <a name="DataAzureadServicePrincipalFeatureTags" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTags.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_service_principal

dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTags()
```


### DataAzureadServicePrincipalOauth2PermissionScopes <a name="DataAzureadServicePrincipalOauth2PermissionScopes" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopes.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_service_principal

dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopes()
```


### DataAzureadServicePrincipalSamlSingleSignOn <a name="DataAzureadServicePrincipalSamlSingleSignOn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOn.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_service_principal

dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOn()
```


### DataAzureadServicePrincipalTimeouts <a name="DataAzureadServicePrincipalTimeouts" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_service_principal

dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/data-sources/service_principal#read DataAzureadServicePrincipal#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/data-sources/service_principal#read DataAzureadServicePrincipal#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadServicePrincipalAppRolesList <a name="DataAzureadServicePrincipalAppRolesList" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_service_principal

dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzureadServicePrincipalAppRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzureadServicePrincipalAppRolesOutputReference <a name="DataAzureadServicePrincipalAppRolesOutputReference" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_service_principal

dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.allowedMemberTypes">allowed_member_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRoles">DataAzureadServicePrincipalAppRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_member_types`<sup>Required</sup> <a name="allowed_member_types" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.allowedMemberTypes"></a>

```python
allowed_member_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.internalValue"></a>

```python
internal_value: DataAzureadServicePrincipalAppRoles
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRoles">DataAzureadServicePrincipalAppRoles</a>

---


### DataAzureadServicePrincipalFeaturesList <a name="DataAzureadServicePrincipalFeaturesList" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_service_principal

dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzureadServicePrincipalFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzureadServicePrincipalFeaturesOutputReference <a name="DataAzureadServicePrincipalFeaturesOutputReference" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_service_principal

dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.customSingleSignOnApp">custom_single_sign_on_app</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.enterpriseApplication">enterprise_application</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.galleryApplication">gallery_application</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.visibleToUsers">visible_to_users</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatures">DataAzureadServicePrincipalFeatures</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_single_sign_on_app`<sup>Required</sup> <a name="custom_single_sign_on_app" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.customSingleSignOnApp"></a>

```python
custom_single_sign_on_app: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enterprise_application`<sup>Required</sup> <a name="enterprise_application" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.enterpriseApplication"></a>

```python
enterprise_application: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `gallery_application`<sup>Required</sup> <a name="gallery_application" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.galleryApplication"></a>

```python
gallery_application: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `visible_to_users`<sup>Required</sup> <a name="visible_to_users" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.visibleToUsers"></a>

```python
visible_to_users: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.internalValue"></a>

```python
internal_value: DataAzureadServicePrincipalFeatures
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatures">DataAzureadServicePrincipalFeatures</a>

---


### DataAzureadServicePrincipalFeatureTagsList <a name="DataAzureadServicePrincipalFeatureTagsList" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_service_principal

dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzureadServicePrincipalFeatureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzureadServicePrincipalFeatureTagsOutputReference <a name="DataAzureadServicePrincipalFeatureTagsOutputReference" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_service_principal

dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.customSingleSignOn">custom_single_sign_on</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.enterprise">enterprise</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.gallery">gallery</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.hide">hide</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTags">DataAzureadServicePrincipalFeatureTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_single_sign_on`<sup>Required</sup> <a name="custom_single_sign_on" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.customSingleSignOn"></a>

```python
custom_single_sign_on: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enterprise`<sup>Required</sup> <a name="enterprise" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.enterprise"></a>

```python
enterprise: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `gallery`<sup>Required</sup> <a name="gallery" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.gallery"></a>

```python
gallery: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `hide`<sup>Required</sup> <a name="hide" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.hide"></a>

```python
hide: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzureadServicePrincipalFeatureTags
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTags">DataAzureadServicePrincipalFeatureTags</a>

---


### DataAzureadServicePrincipalOauth2PermissionScopesList <a name="DataAzureadServicePrincipalOauth2PermissionScopesList" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_service_principal

dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzureadServicePrincipalOauth2PermissionScopesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzureadServicePrincipalOauth2PermissionScopesOutputReference <a name="DataAzureadServicePrincipalOauth2PermissionScopesOutputReference" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_service_principal

dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.adminConsentDescription">admin_consent_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.adminConsentDisplayName">admin_consent_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.userConsentDescription">user_consent_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.userConsentDisplayName">user_consent_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopes">DataAzureadServicePrincipalOauth2PermissionScopes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_consent_description`<sup>Required</sup> <a name="admin_consent_description" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.adminConsentDescription"></a>

```python
admin_consent_description: str
```

- *Type:* str

---

##### `admin_consent_display_name`<sup>Required</sup> <a name="admin_consent_display_name" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.adminConsentDisplayName"></a>

```python
admin_consent_display_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_consent_description`<sup>Required</sup> <a name="user_consent_description" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.userConsentDescription"></a>

```python
user_consent_description: str
```

- *Type:* str

---

##### `user_consent_display_name`<sup>Required</sup> <a name="user_consent_display_name" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.userConsentDisplayName"></a>

```python
user_consent_display_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.internalValue"></a>

```python
internal_value: DataAzureadServicePrincipalOauth2PermissionScopes
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopes">DataAzureadServicePrincipalOauth2PermissionScopes</a>

---


### DataAzureadServicePrincipalSamlSingleSignOnList <a name="DataAzureadServicePrincipalSamlSingleSignOnList" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_service_principal

dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzureadServicePrincipalSamlSingleSignOnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzureadServicePrincipalSamlSingleSignOnOutputReference <a name="DataAzureadServicePrincipalSamlSingleSignOnOutputReference" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_service_principal

dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.property.relayState">relay_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOn">DataAzureadServicePrincipalSamlSingleSignOn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `relay_state`<sup>Required</sup> <a name="relay_state" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.property.relayState"></a>

```python
relay_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.property.internalValue"></a>

```python
internal_value: DataAzureadServicePrincipalSamlSingleSignOn
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOn">DataAzureadServicePrincipalSamlSingleSignOn</a>

---


### DataAzureadServicePrincipalTimeoutsOutputReference <a name="DataAzureadServicePrincipalTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_service_principal

dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts">DataAzureadServicePrincipalTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzureadServicePrincipalTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts">DataAzureadServicePrincipalTimeouts</a>]

---



