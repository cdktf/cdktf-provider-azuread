# `data_azuread_access_package_catalog_role`

Refer to the Terraform Registory for docs: [`data_azuread_access_package_catalog_role`](https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/access_package_catalog_role).

# `dataAzureadAccessPackageCatalogRole` Submodule <a name="`dataAzureadAccessPackageCatalogRole` Submodule" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadAccessPackageCatalogRole <a name="DataAzureadAccessPackageCatalogRole" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/access_package_catalog_role azuread_access_package_catalog_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v10/dataazureadaccesspackagecatalogrole"

dataazureadaccesspackagecatalogrole.NewDataAzureadAccessPackageCatalogRole(scope Construct, id *string, config DataAzureadAccessPackageCatalogRoleConfig) DataAzureadAccessPackageCatalogRole
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig">DataAzureadAccessPackageCatalogRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig">DataAzureadAccessPackageCatalogRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.resetObjectId">ResetObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.putTimeouts"></a>

```go
func PutTimeouts(value DataAzureadAccessPackageCatalogRoleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeouts">DataAzureadAccessPackageCatalogRoleTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.resetId"></a>

```go
func ResetId()
```

##### `ResetObjectId` <a name="ResetObjectId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.resetObjectId"></a>

```go
func ResetObjectId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v10/dataazureadaccesspackagecatalogrole"

dataazureadaccesspackagecatalogrole.DataAzureadAccessPackageCatalogRole_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v10/dataazureadaccesspackagecatalogrole"

dataazureadaccesspackagecatalogrole.DataAzureadAccessPackageCatalogRole_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v10/dataazureadaccesspackagecatalogrole"

dataazureadaccesspackagecatalogrole.DataAzureadAccessPackageCatalogRole_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.templateId">TemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference">DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.objectIdInput">ObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `TemplateId`<sup>Required</sup> <a name="TemplateId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.templateId"></a>

```go
func TemplateId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.timeouts"></a>

```go
func Timeouts() DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference">DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.objectIdInput"></a>

```go
func ObjectIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRole.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadAccessPackageCatalogRoleConfig <a name="DataAzureadAccessPackageCatalogRoleConfig" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v10/dataazureadaccesspackagecatalogrole"

&dataazureadaccesspackagecatalogrole.DataAzureadAccessPackageCatalogRoleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Id: *string,
	ObjectId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azuread-go/azuread/v10.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the catalog role. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/access_package_catalog_role#id DataAzureadAccessPackageCatalogRole#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.objectId">ObjectId</a></code> | <code>*string</code> | The object ID of the catalog role. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeouts">DataAzureadAccessPackageCatalogRoleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the catalog role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/access_package_catalog_role#display_name DataAzureadAccessPackageCatalogRole#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/access_package_catalog_role#id DataAzureadAccessPackageCatalogRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ObjectId`<sup>Optional</sup> <a name="ObjectId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.objectId"></a>

```go
ObjectId *string
```

- *Type:* *string

The object ID of the catalog role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/access_package_catalog_role#object_id DataAzureadAccessPackageCatalogRole#object_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleConfig.property.timeouts"></a>

```go
Timeouts DataAzureadAccessPackageCatalogRoleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeouts">DataAzureadAccessPackageCatalogRoleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/access_package_catalog_role#timeouts DataAzureadAccessPackageCatalogRole#timeouts}

---

### DataAzureadAccessPackageCatalogRoleTimeouts <a name="DataAzureadAccessPackageCatalogRoleTimeouts" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v10/dataazureadaccesspackagecatalogrole"

&dataazureadaccesspackagecatalogrole.DataAzureadAccessPackageCatalogRoleTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/access_package_catalog_role#read DataAzureadAccessPackageCatalogRole#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/data-sources/access_package_catalog_role#read DataAzureadAccessPackageCatalogRole#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference <a name="DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v10/dataazureadaccesspackagecatalogrole"

dataazureadaccesspackagecatalogrole.NewDataAzureadAccessPackageCatalogRoleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalogRole.DataAzureadAccessPackageCatalogRoleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



