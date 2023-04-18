# `azuread_application_pre_authorized`

Refer to the Terraform Registory for docs: [`azuread_application_pre_authorized`](https://registry.terraform.io/providers/hashicorp/azuread/2.37.1/docs/resources/application_pre_authorized).

# `applicationPreAuthorized` Submodule <a name="`applicationPreAuthorized` Submodule" id="@cdktf/provider-azuread.applicationPreAuthorized"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationPreAuthorized <a name="ApplicationPreAuthorized" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.1/docs/resources/application_pre_authorized azuread_application_pre_authorized}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v7/applicationpreauthorized"

applicationpreauthorized.NewApplicationPreAuthorized(scope Construct, id *string, config ApplicationPreAuthorizedConfig) ApplicationPreAuthorized
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig">ApplicationPreAuthorizedConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig">ApplicationPreAuthorizedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.putTimeouts"></a>

```go
func PutTimeouts(value ApplicationPreAuthorizedTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeouts">ApplicationPreAuthorizedTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v7/applicationpreauthorized"

applicationpreauthorized.ApplicationPreAuthorized_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v7/applicationpreauthorized"

applicationpreauthorized.ApplicationPreAuthorized_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v7/applicationpreauthorized"

applicationpreauthorized.ApplicationPreAuthorized_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference">ApplicationPreAuthorizedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.applicationObjectIdInput">ApplicationObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.authorizedAppIdInput">AuthorizedAppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.permissionIdsInput">PermissionIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.applicationObjectId">ApplicationObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.authorizedAppId">AuthorizedAppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.permissionIds">PermissionIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.timeouts"></a>

```go
func Timeouts() ApplicationPreAuthorizedTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference">ApplicationPreAuthorizedTimeoutsOutputReference</a>

---

##### `ApplicationObjectIdInput`<sup>Optional</sup> <a name="ApplicationObjectIdInput" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.applicationObjectIdInput"></a>

```go
func ApplicationObjectIdInput() *string
```

- *Type:* *string

---

##### `AuthorizedAppIdInput`<sup>Optional</sup> <a name="AuthorizedAppIdInput" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.authorizedAppIdInput"></a>

```go
func AuthorizedAppIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PermissionIdsInput`<sup>Optional</sup> <a name="PermissionIdsInput" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.permissionIdsInput"></a>

```go
func PermissionIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationObjectId`<sup>Required</sup> <a name="ApplicationObjectId" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.applicationObjectId"></a>

```go
func ApplicationObjectId() *string
```

- *Type:* *string

---

##### `AuthorizedAppId`<sup>Required</sup> <a name="AuthorizedAppId" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.authorizedAppId"></a>

```go
func AuthorizedAppId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PermissionIds`<sup>Required</sup> <a name="PermissionIds" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.permissionIds"></a>

```go
func PermissionIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationPreAuthorizedConfig <a name="ApplicationPreAuthorizedConfig" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v7/applicationpreauthorized"

&applicationpreauthorized.ApplicationPreAuthorizedConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationObjectId: *string,
	AuthorizedAppId: *string,
	PermissionIds: *[]*string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azuread-go/azuread/v7.applicationPreAuthorized.ApplicationPreAuthorizedTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.applicationObjectId">ApplicationObjectId</a></code> | <code>*string</code> | The object ID of the application to which this pre-authorized application should be added. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.authorizedAppId">AuthorizedAppId</a></code> | <code>*string</code> | The application ID of the pre-authorized application. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.permissionIds">PermissionIds</a></code> | <code>*[]*string</code> | The IDs of the permission scopes required by the pre-authorized application. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.1/docs/resources/application_pre_authorized#id ApplicationPreAuthorized#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeouts">ApplicationPreAuthorizedTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationObjectId`<sup>Required</sup> <a name="ApplicationObjectId" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.applicationObjectId"></a>

```go
ApplicationObjectId *string
```

- *Type:* *string

The object ID of the application to which this pre-authorized application should be added.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.1/docs/resources/application_pre_authorized#application_object_id ApplicationPreAuthorized#application_object_id}

---

##### `AuthorizedAppId`<sup>Required</sup> <a name="AuthorizedAppId" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.authorizedAppId"></a>

```go
AuthorizedAppId *string
```

- *Type:* *string

The application ID of the pre-authorized application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.1/docs/resources/application_pre_authorized#authorized_app_id ApplicationPreAuthorized#authorized_app_id}

---

##### `PermissionIds`<sup>Required</sup> <a name="PermissionIds" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.permissionIds"></a>

```go
PermissionIds *[]*string
```

- *Type:* *[]*string

The IDs of the permission scopes required by the pre-authorized application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.1/docs/resources/application_pre_authorized#permission_ids ApplicationPreAuthorized#permission_ids}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.1/docs/resources/application_pre_authorized#id ApplicationPreAuthorized#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.timeouts"></a>

```go
Timeouts ApplicationPreAuthorizedTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeouts">ApplicationPreAuthorizedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.1/docs/resources/application_pre_authorized#timeouts ApplicationPreAuthorized#timeouts}

---

### ApplicationPreAuthorizedTimeouts <a name="ApplicationPreAuthorizedTimeouts" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v7/applicationpreauthorized"

&applicationpreauthorized.ApplicationPreAuthorizedTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.1/docs/resources/application_pre_authorized#create ApplicationPreAuthorized#create}. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.1/docs/resources/application_pre_authorized#delete ApplicationPreAuthorized#delete}. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.1/docs/resources/application_pre_authorized#read ApplicationPreAuthorized#read}. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.1/docs/resources/application_pre_authorized#update ApplicationPreAuthorized#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.1/docs/resources/application_pre_authorized#create ApplicationPreAuthorized#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.1/docs/resources/application_pre_authorized#delete ApplicationPreAuthorized#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.1/docs/resources/application_pre_authorized#read ApplicationPreAuthorized#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.1/docs/resources/application_pre_authorized#update ApplicationPreAuthorized#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationPreAuthorizedTimeoutsOutputReference <a name="ApplicationPreAuthorizedTimeoutsOutputReference" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v7/applicationpreauthorized"

applicationpreauthorized.NewApplicationPreAuthorizedTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApplicationPreAuthorizedTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



