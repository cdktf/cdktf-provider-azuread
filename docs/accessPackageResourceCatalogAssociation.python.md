# `azuread_access_package_resource_catalog_association`

Refer to the Terraform Registory for docs: [`azuread_access_package_resource_catalog_association`](https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association).

# `accessPackageResourceCatalogAssociation` Submodule <a name="`accessPackageResourceCatalogAssociation` Submodule" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessPackageResourceCatalogAssociation <a name="AccessPackageResourceCatalogAssociation" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association azuread_access_package_resource_catalog_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_resource_catalog_association

accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  catalog_id: str,
  resource_origin_id: str,
  resource_origin_system: str,
  id: str = None,
  timeouts: AccessPackageResourceCatalogAssociationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.catalogId">catalog_id</a></code> | <code>str</code> | The unique ID of the access package catalog. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.resourceOriginId">resource_origin_id</a></code> | <code>str</code> | The unique identifier of the resource in the origin system. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.resourceOriginSystem">resource_origin_system</a></code> | <code>str</code> | The type of the resource in the origin system, such as SharePointOnline, AadApplication or AadGroup. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#id AccessPackageResourceCatalogAssociation#id}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts">AccessPackageResourceCatalogAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.catalogId"></a>

- *Type:* str

The unique ID of the access package catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#catalog_id AccessPackageResourceCatalogAssociation#catalog_id}

---

##### `resource_origin_id`<sup>Required</sup> <a name="resource_origin_id" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.resourceOriginId"></a>

- *Type:* str

The unique identifier of the resource in the origin system.

In the case of an Azure AD group, this is the identifier of the group

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#resource_origin_id AccessPackageResourceCatalogAssociation#resource_origin_id}

---

##### `resource_origin_system`<sup>Required</sup> <a name="resource_origin_system" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.resourceOriginSystem"></a>

- *Type:* str

The type of the resource in the origin system, such as SharePointOnline, AadApplication or AadGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#resource_origin_system AccessPackageResourceCatalogAssociation#resource_origin_system}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#id AccessPackageResourceCatalogAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts">AccessPackageResourceCatalogAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#timeouts AccessPackageResourceCatalogAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#create AccessPackageResourceCatalogAssociation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#delete AccessPackageResourceCatalogAssociation#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#read AccessPackageResourceCatalogAssociation#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_resource_catalog_association

accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_resource_catalog_association

accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_resource_catalog_association

accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference">AccessPackageResourceCatalogAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.resourceOriginIdInput">resource_origin_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.resourceOriginSystemInput">resource_origin_system_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts">AccessPackageResourceCatalogAssociationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.resourceOriginId">resource_origin_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.resourceOriginSystem">resource_origin_system</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.timeouts"></a>

```python
timeouts: AccessPackageResourceCatalogAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference">AccessPackageResourceCatalogAssociationTimeoutsOutputReference</a>

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_origin_id_input`<sup>Optional</sup> <a name="resource_origin_id_input" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.resourceOriginIdInput"></a>

```python
resource_origin_id_input: str
```

- *Type:* str

---

##### `resource_origin_system_input`<sup>Optional</sup> <a name="resource_origin_system_input" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.resourceOriginSystemInput"></a>

```python
resource_origin_system_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AccessPackageResourceCatalogAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts">AccessPackageResourceCatalogAssociationTimeouts</a>]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_origin_id`<sup>Required</sup> <a name="resource_origin_id" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.resourceOriginId"></a>

```python
resource_origin_id: str
```

- *Type:* str

---

##### `resource_origin_system`<sup>Required</sup> <a name="resource_origin_system" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.resourceOriginSystem"></a>

```python
resource_origin_system: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AccessPackageResourceCatalogAssociationConfig <a name="AccessPackageResourceCatalogAssociationConfig" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_resource_catalog_association

accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  catalog_id: str,
  resource_origin_id: str,
  resource_origin_system: str,
  id: str = None,
  timeouts: AccessPackageResourceCatalogAssociationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.catalogId">catalog_id</a></code> | <code>str</code> | The unique ID of the access package catalog. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.resourceOriginId">resource_origin_id</a></code> | <code>str</code> | The unique identifier of the resource in the origin system. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.resourceOriginSystem">resource_origin_system</a></code> | <code>str</code> | The type of the resource in the origin system, such as SharePointOnline, AadApplication or AadGroup. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#id AccessPackageResourceCatalogAssociation#id}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts">AccessPackageResourceCatalogAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

The unique ID of the access package catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#catalog_id AccessPackageResourceCatalogAssociation#catalog_id}

---

##### `resource_origin_id`<sup>Required</sup> <a name="resource_origin_id" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.resourceOriginId"></a>

```python
resource_origin_id: str
```

- *Type:* str

The unique identifier of the resource in the origin system.

In the case of an Azure AD group, this is the identifier of the group

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#resource_origin_id AccessPackageResourceCatalogAssociation#resource_origin_id}

---

##### `resource_origin_system`<sup>Required</sup> <a name="resource_origin_system" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.resourceOriginSystem"></a>

```python
resource_origin_system: str
```

- *Type:* str

The type of the resource in the origin system, such as SharePointOnline, AadApplication or AadGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#resource_origin_system AccessPackageResourceCatalogAssociation#resource_origin_system}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#id AccessPackageResourceCatalogAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.timeouts"></a>

```python
timeouts: AccessPackageResourceCatalogAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts">AccessPackageResourceCatalogAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#timeouts AccessPackageResourceCatalogAssociation#timeouts}

---

### AccessPackageResourceCatalogAssociationTimeouts <a name="AccessPackageResourceCatalogAssociationTimeouts" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_resource_catalog_association

accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#create AccessPackageResourceCatalogAssociation#create}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#delete AccessPackageResourceCatalogAssociation#delete}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#read AccessPackageResourceCatalogAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#create AccessPackageResourceCatalogAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#delete AccessPackageResourceCatalogAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#read AccessPackageResourceCatalogAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessPackageResourceCatalogAssociationTimeoutsOutputReference <a name="AccessPackageResourceCatalogAssociationTimeoutsOutputReference" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_resource_catalog_association

accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts">AccessPackageResourceCatalogAssociationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPackageResourceCatalogAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts">AccessPackageResourceCatalogAssociationTimeouts</a>]

---



