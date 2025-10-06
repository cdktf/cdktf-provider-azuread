# `dataAzureadApplicationTemplate` Submodule <a name="`dataAzureadApplicationTemplate` Submodule" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadApplicationTemplate <a name="DataAzureadApplicationTemplate" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/application_template azuread_application_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_application_template

dataAzureadApplicationTemplate.DataAzureadApplicationTemplate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str = None,
  id: str = None,
  template_id: str = None,
  timeouts: DataAzureadApplicationTemplateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name for the application template. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/application_template#id DataAzureadApplicationTemplate#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.templateId">template_id</a></code> | <code>str</code> | The application template's ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeouts">DataAzureadApplicationTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.displayName"></a>

- *Type:* str

The display name for the application template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/application_template#display_name DataAzureadApplicationTemplate#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/application_template#id DataAzureadApplicationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `template_id`<sup>Optional</sup> <a name="template_id" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.templateId"></a>

- *Type:* str

The application template's ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/application_template#template_id DataAzureadApplicationTemplate#template_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeouts">DataAzureadApplicationTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/application_template#timeouts DataAzureadApplicationTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.resetTemplateId">reset_template_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/application_template#read DataAzureadApplicationTemplate#read}.

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_template_id` <a name="reset_template_id" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.resetTemplateId"></a>

```python
def reset_template_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzureadApplicationTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_application_template

dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_application_template

dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_application_template

dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_application_template

dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzureadApplicationTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzureadApplicationTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzureadApplicationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/application_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzureadApplicationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.categories">categories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.homepageUrl">homepage_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.logoUrl">logo_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.supportedProvisioningTypes">supported_provisioning_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.supportedSingleSignOnModes">supported_single_sign_on_modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference">DataAzureadApplicationTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.templateIdInput">template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeouts">DataAzureadApplicationTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.templateId">template_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.categories"></a>

```python
categories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `homepage_url`<sup>Required</sup> <a name="homepage_url" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.homepageUrl"></a>

```python
homepage_url: str
```

- *Type:* str

---

##### `logo_url`<sup>Required</sup> <a name="logo_url" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.logoUrl"></a>

```python
logo_url: str
```

- *Type:* str

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `supported_provisioning_types`<sup>Required</sup> <a name="supported_provisioning_types" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.supportedProvisioningTypes"></a>

```python
supported_provisioning_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_single_sign_on_modes`<sup>Required</sup> <a name="supported_single_sign_on_modes" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.supportedSingleSignOnModes"></a>

```python
supported_single_sign_on_modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.timeouts"></a>

```python
timeouts: DataAzureadApplicationTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference">DataAzureadApplicationTemplateTimeoutsOutputReference</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `template_id_input`<sup>Optional</sup> <a name="template_id_input" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.templateIdInput"></a>

```python
template_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzureadApplicationTemplateTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeouts">DataAzureadApplicationTemplateTimeouts</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `template_id`<sup>Required</sup> <a name="template_id" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.templateId"></a>

```python
template_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadApplicationTemplateConfig <a name="DataAzureadApplicationTemplateConfig" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_application_template

dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str = None,
  id: str = None,
  template_id: str = None,
  timeouts: DataAzureadApplicationTemplateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name for the application template. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/application_template#id DataAzureadApplicationTemplate#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.templateId">template_id</a></code> | <code>str</code> | The application template's ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeouts">DataAzureadApplicationTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name for the application template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/application_template#display_name DataAzureadApplicationTemplate#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/application_template#id DataAzureadApplicationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `template_id`<sup>Optional</sup> <a name="template_id" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.templateId"></a>

```python
template_id: str
```

- *Type:* str

The application template's ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/application_template#template_id DataAzureadApplicationTemplate#template_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateConfig.property.timeouts"></a>

```python
timeouts: DataAzureadApplicationTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeouts">DataAzureadApplicationTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/application_template#timeouts DataAzureadApplicationTemplate#timeouts}

---

### DataAzureadApplicationTemplateTimeouts <a name="DataAzureadApplicationTemplateTimeouts" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_application_template

dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/application_template#read DataAzureadApplicationTemplate#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/application_template#read DataAzureadApplicationTemplate#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadApplicationTemplateTimeoutsOutputReference <a name="DataAzureadApplicationTemplateTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_application_template

dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeouts">DataAzureadApplicationTemplateTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzureadApplicationTemplateTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.dataAzureadApplicationTemplate.DataAzureadApplicationTemplateTimeouts">DataAzureadApplicationTemplateTimeouts</a>

---



