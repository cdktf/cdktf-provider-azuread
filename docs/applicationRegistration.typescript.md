# `applicationRegistration` Submodule <a name="`applicationRegistration` Submodule" id="@cdktf/provider-azuread.applicationRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationRegistration <a name="ApplicationRegistration" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application_registration azuread_application_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer"></a>

```typescript
import { applicationRegistration } from '@cdktf/provider-azuread'

new applicationRegistration.ApplicationRegistration(scope: Construct, id: string, config: ApplicationRegistrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig">ApplicationRegistrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig">ApplicationRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetGroupMembershipClaims">resetGroupMembershipClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetHomepageUrl">resetHomepageUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetImplicitAccessTokenIssuanceEnabled">resetImplicitAccessTokenIssuanceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetImplicitIdTokenIssuanceEnabled">resetImplicitIdTokenIssuanceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetLogoutUrl">resetLogoutUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetMarketingUrl">resetMarketingUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetNotes">resetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetPrivacyStatementUrl">resetPrivacyStatementUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetRequestedAccessTokenVersion">resetRequestedAccessTokenVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetServiceManagementReference">resetServiceManagementReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetSignInAudience">resetSignInAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetSupportUrl">resetSupportUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetTermsOfServiceUrl">resetTermsOfServiceUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.putTimeouts"></a>

```typescript
public putTimeouts(value: ApplicationRegistrationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGroupMembershipClaims` <a name="resetGroupMembershipClaims" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetGroupMembershipClaims"></a>

```typescript
public resetGroupMembershipClaims(): void
```

##### `resetHomepageUrl` <a name="resetHomepageUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetHomepageUrl"></a>

```typescript
public resetHomepageUrl(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImplicitAccessTokenIssuanceEnabled` <a name="resetImplicitAccessTokenIssuanceEnabled" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetImplicitAccessTokenIssuanceEnabled"></a>

```typescript
public resetImplicitAccessTokenIssuanceEnabled(): void
```

##### `resetImplicitIdTokenIssuanceEnabled` <a name="resetImplicitIdTokenIssuanceEnabled" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetImplicitIdTokenIssuanceEnabled"></a>

```typescript
public resetImplicitIdTokenIssuanceEnabled(): void
```

##### `resetLogoutUrl` <a name="resetLogoutUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetLogoutUrl"></a>

```typescript
public resetLogoutUrl(): void
```

##### `resetMarketingUrl` <a name="resetMarketingUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetMarketingUrl"></a>

```typescript
public resetMarketingUrl(): void
```

##### `resetNotes` <a name="resetNotes" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetNotes"></a>

```typescript
public resetNotes(): void
```

##### `resetPrivacyStatementUrl` <a name="resetPrivacyStatementUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetPrivacyStatementUrl"></a>

```typescript
public resetPrivacyStatementUrl(): void
```

##### `resetRequestedAccessTokenVersion` <a name="resetRequestedAccessTokenVersion" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetRequestedAccessTokenVersion"></a>

```typescript
public resetRequestedAccessTokenVersion(): void
```

##### `resetServiceManagementReference` <a name="resetServiceManagementReference" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetServiceManagementReference"></a>

```typescript
public resetServiceManagementReference(): void
```

##### `resetSignInAudience` <a name="resetSignInAudience" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetSignInAudience"></a>

```typescript
public resetSignInAudience(): void
```

##### `resetSupportUrl` <a name="resetSupportUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetSupportUrl"></a>

```typescript
public resetSupportUrl(): void
```

##### `resetTermsOfServiceUrl` <a name="resetTermsOfServiceUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetTermsOfServiceUrl"></a>

```typescript
public resetTermsOfServiceUrl(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationRegistration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isConstruct"></a>

```typescript
import { applicationRegistration } from '@cdktf/provider-azuread'

applicationRegistration.ApplicationRegistration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformElement"></a>

```typescript
import { applicationRegistration } from '@cdktf/provider-azuread'

applicationRegistration.ApplicationRegistration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformResource"></a>

```typescript
import { applicationRegistration } from '@cdktf/provider-azuread'

applicationRegistration.ApplicationRegistration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport"></a>

```typescript
import { applicationRegistration } from '@cdktf/provider-azuread'

applicationRegistration.ApplicationRegistration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApplicationRegistration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.disabledByMicrosoft">disabledByMicrosoft</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.publisherDomain">publisherDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference">ApplicationRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.groupMembershipClaimsInput">groupMembershipClaimsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.homepageUrlInput">homepageUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitAccessTokenIssuanceEnabledInput">implicitAccessTokenIssuanceEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitIdTokenIssuanceEnabledInput">implicitIdTokenIssuanceEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.logoutUrlInput">logoutUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.marketingUrlInput">marketingUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.notesInput">notesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.privacyStatementUrlInput">privacyStatementUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.requestedAccessTokenVersionInput">requestedAccessTokenVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.serviceManagementReferenceInput">serviceManagementReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.signInAudienceInput">signInAudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.supportUrlInput">supportUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.termsOfServiceUrlInput">termsOfServiceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.groupMembershipClaims">groupMembershipClaims</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.homepageUrl">homepageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitAccessTokenIssuanceEnabled">implicitAccessTokenIssuanceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitIdTokenIssuanceEnabled">implicitIdTokenIssuanceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.logoutUrl">logoutUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.marketingUrl">marketingUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.notes">notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.privacyStatementUrl">privacyStatementUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.requestedAccessTokenVersion">requestedAccessTokenVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.serviceManagementReference">serviceManagementReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.signInAudience">signInAudience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.supportUrl">supportUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.termsOfServiceUrl">termsOfServiceUrl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `disabledByMicrosoft`<sup>Required</sup> <a name="disabledByMicrosoft" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.disabledByMicrosoft"></a>

```typescript
public readonly disabledByMicrosoft: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `publisherDomain`<sup>Required</sup> <a name="publisherDomain" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.publisherDomain"></a>

```typescript
public readonly publisherDomain: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationRegistrationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference">ApplicationRegistrationTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `groupMembershipClaimsInput`<sup>Optional</sup> <a name="groupMembershipClaimsInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.groupMembershipClaimsInput"></a>

```typescript
public readonly groupMembershipClaimsInput: string[];
```

- *Type:* string[]

---

##### `homepageUrlInput`<sup>Optional</sup> <a name="homepageUrlInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.homepageUrlInput"></a>

```typescript
public readonly homepageUrlInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `implicitAccessTokenIssuanceEnabledInput`<sup>Optional</sup> <a name="implicitAccessTokenIssuanceEnabledInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitAccessTokenIssuanceEnabledInput"></a>

```typescript
public readonly implicitAccessTokenIssuanceEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `implicitIdTokenIssuanceEnabledInput`<sup>Optional</sup> <a name="implicitIdTokenIssuanceEnabledInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitIdTokenIssuanceEnabledInput"></a>

```typescript
public readonly implicitIdTokenIssuanceEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logoutUrlInput`<sup>Optional</sup> <a name="logoutUrlInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.logoutUrlInput"></a>

```typescript
public readonly logoutUrlInput: string;
```

- *Type:* string

---

##### `marketingUrlInput`<sup>Optional</sup> <a name="marketingUrlInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.marketingUrlInput"></a>

```typescript
public readonly marketingUrlInput: string;
```

- *Type:* string

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.notesInput"></a>

```typescript
public readonly notesInput: string;
```

- *Type:* string

---

##### `privacyStatementUrlInput`<sup>Optional</sup> <a name="privacyStatementUrlInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.privacyStatementUrlInput"></a>

```typescript
public readonly privacyStatementUrlInput: string;
```

- *Type:* string

---

##### `requestedAccessTokenVersionInput`<sup>Optional</sup> <a name="requestedAccessTokenVersionInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.requestedAccessTokenVersionInput"></a>

```typescript
public readonly requestedAccessTokenVersionInput: number;
```

- *Type:* number

---

##### `serviceManagementReferenceInput`<sup>Optional</sup> <a name="serviceManagementReferenceInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.serviceManagementReferenceInput"></a>

```typescript
public readonly serviceManagementReferenceInput: string;
```

- *Type:* string

---

##### `signInAudienceInput`<sup>Optional</sup> <a name="signInAudienceInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.signInAudienceInput"></a>

```typescript
public readonly signInAudienceInput: string;
```

- *Type:* string

---

##### `supportUrlInput`<sup>Optional</sup> <a name="supportUrlInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.supportUrlInput"></a>

```typescript
public readonly supportUrlInput: string;
```

- *Type:* string

---

##### `termsOfServiceUrlInput`<sup>Optional</sup> <a name="termsOfServiceUrlInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.termsOfServiceUrlInput"></a>

```typescript
public readonly termsOfServiceUrlInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApplicationRegistrationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `groupMembershipClaims`<sup>Required</sup> <a name="groupMembershipClaims" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.groupMembershipClaims"></a>

```typescript
public readonly groupMembershipClaims: string[];
```

- *Type:* string[]

---

##### `homepageUrl`<sup>Required</sup> <a name="homepageUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.homepageUrl"></a>

```typescript
public readonly homepageUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `implicitAccessTokenIssuanceEnabled`<sup>Required</sup> <a name="implicitAccessTokenIssuanceEnabled" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitAccessTokenIssuanceEnabled"></a>

```typescript
public readonly implicitAccessTokenIssuanceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `implicitIdTokenIssuanceEnabled`<sup>Required</sup> <a name="implicitIdTokenIssuanceEnabled" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitIdTokenIssuanceEnabled"></a>

```typescript
public readonly implicitIdTokenIssuanceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logoutUrl`<sup>Required</sup> <a name="logoutUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.logoutUrl"></a>

```typescript
public readonly logoutUrl: string;
```

- *Type:* string

---

##### `marketingUrl`<sup>Required</sup> <a name="marketingUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.marketingUrl"></a>

```typescript
public readonly marketingUrl: string;
```

- *Type:* string

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

---

##### `privacyStatementUrl`<sup>Required</sup> <a name="privacyStatementUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.privacyStatementUrl"></a>

```typescript
public readonly privacyStatementUrl: string;
```

- *Type:* string

---

##### `requestedAccessTokenVersion`<sup>Required</sup> <a name="requestedAccessTokenVersion" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.requestedAccessTokenVersion"></a>

```typescript
public readonly requestedAccessTokenVersion: number;
```

- *Type:* number

---

##### `serviceManagementReference`<sup>Required</sup> <a name="serviceManagementReference" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.serviceManagementReference"></a>

```typescript
public readonly serviceManagementReference: string;
```

- *Type:* string

---

##### `signInAudience`<sup>Required</sup> <a name="signInAudience" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.signInAudience"></a>

```typescript
public readonly signInAudience: string;
```

- *Type:* string

---

##### `supportUrl`<sup>Required</sup> <a name="supportUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.supportUrl"></a>

```typescript
public readonly supportUrl: string;
```

- *Type:* string

---

##### `termsOfServiceUrl`<sup>Required</sup> <a name="termsOfServiceUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.termsOfServiceUrl"></a>

```typescript
public readonly termsOfServiceUrl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationRegistrationConfig <a name="ApplicationRegistrationConfig" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.Initializer"></a>

```typescript
import { applicationRegistration } from '@cdktf/provider-azuread'

const applicationRegistrationConfig: applicationRegistration.ApplicationRegistrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.description">description</a></code> | <code>string</code> | Description of the application as shown to end users. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.groupMembershipClaims">groupMembershipClaims</a></code> | <code>string[]</code> | Configures the `groups` claim that the app expects issued in a user or OAuth access token. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.homepageUrl">homepageUrl</a></code> | <code>string</code> | URL of the home page for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application_registration#id ApplicationRegistration#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.implicitAccessTokenIssuanceEnabled">implicitAccessTokenIssuanceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this application can request an access token using OAuth implicit flow. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.implicitIdTokenIssuanceEnabled">implicitIdTokenIssuanceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this application can request an ID token using OAuth implicit flow. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.logoutUrl">logoutUrl</a></code> | <code>string</code> | URL of the logout page for the application, where the session is cleared for single sign-out. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.marketingUrl">marketingUrl</a></code> | <code>string</code> | URL of the marketing page for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.notes">notes</a></code> | <code>string</code> | User-specified notes relevant for the management of the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.privacyStatementUrl">privacyStatementUrl</a></code> | <code>string</code> | URL of the privacy statement for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.requestedAccessTokenVersion">requestedAccessTokenVersion</a></code> | <code>number</code> | The access token version expected by this resource. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.serviceManagementReference">serviceManagementReference</a></code> | <code>string</code> | References application or contact information from a service or asset management database. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.signInAudience">signInAudience</a></code> | <code>string</code> | The Microsoft account types that are supported for the current application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.supportUrl">supportUrl</a></code> | <code>string</code> | URL of the support page for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.termsOfServiceUrl">termsOfServiceUrl</a></code> | <code>string</code> | URL of the terms of service statement for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application_registration#display_name ApplicationRegistration#display_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the application as shown to end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application_registration#description ApplicationRegistration#description}

---

##### `groupMembershipClaims`<sup>Optional</sup> <a name="groupMembershipClaims" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.groupMembershipClaims"></a>

```typescript
public readonly groupMembershipClaims: string[];
```

- *Type:* string[]

Configures the `groups` claim that the app expects issued in a user or OAuth access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application_registration#group_membership_claims ApplicationRegistration#group_membership_claims}

---

##### `homepageUrl`<sup>Optional</sup> <a name="homepageUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.homepageUrl"></a>

```typescript
public readonly homepageUrl: string;
```

- *Type:* string

URL of the home page for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application_registration#homepage_url ApplicationRegistration#homepage_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application_registration#id ApplicationRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `implicitAccessTokenIssuanceEnabled`<sup>Optional</sup> <a name="implicitAccessTokenIssuanceEnabled" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.implicitAccessTokenIssuanceEnabled"></a>

```typescript
public readonly implicitAccessTokenIssuanceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this application can request an access token using OAuth implicit flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application_registration#implicit_access_token_issuance_enabled ApplicationRegistration#implicit_access_token_issuance_enabled}

---

##### `implicitIdTokenIssuanceEnabled`<sup>Optional</sup> <a name="implicitIdTokenIssuanceEnabled" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.implicitIdTokenIssuanceEnabled"></a>

```typescript
public readonly implicitIdTokenIssuanceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this application can request an ID token using OAuth implicit flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application_registration#implicit_id_token_issuance_enabled ApplicationRegistration#implicit_id_token_issuance_enabled}

---

##### `logoutUrl`<sup>Optional</sup> <a name="logoutUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.logoutUrl"></a>

```typescript
public readonly logoutUrl: string;
```

- *Type:* string

URL of the logout page for the application, where the session is cleared for single sign-out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application_registration#logout_url ApplicationRegistration#logout_url}

---

##### `marketingUrl`<sup>Optional</sup> <a name="marketingUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.marketingUrl"></a>

```typescript
public readonly marketingUrl: string;
```

- *Type:* string

URL of the marketing page for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application_registration#marketing_url ApplicationRegistration#marketing_url}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

User-specified notes relevant for the management of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application_registration#notes ApplicationRegistration#notes}

---

##### `privacyStatementUrl`<sup>Optional</sup> <a name="privacyStatementUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.privacyStatementUrl"></a>

```typescript
public readonly privacyStatementUrl: string;
```

- *Type:* string

URL of the privacy statement for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application_registration#privacy_statement_url ApplicationRegistration#privacy_statement_url}

---

##### `requestedAccessTokenVersion`<sup>Optional</sup> <a name="requestedAccessTokenVersion" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.requestedAccessTokenVersion"></a>

```typescript
public readonly requestedAccessTokenVersion: number;
```

- *Type:* number

The access token version expected by this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application_registration#requested_access_token_version ApplicationRegistration#requested_access_token_version}

---

##### `serviceManagementReference`<sup>Optional</sup> <a name="serviceManagementReference" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.serviceManagementReference"></a>

```typescript
public readonly serviceManagementReference: string;
```

- *Type:* string

References application or contact information from a service or asset management database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application_registration#service_management_reference ApplicationRegistration#service_management_reference}

---

##### `signInAudience`<sup>Optional</sup> <a name="signInAudience" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.signInAudience"></a>

```typescript
public readonly signInAudience: string;
```

- *Type:* string

The Microsoft account types that are supported for the current application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application_registration#sign_in_audience ApplicationRegistration#sign_in_audience}

---

##### `supportUrl`<sup>Optional</sup> <a name="supportUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.supportUrl"></a>

```typescript
public readonly supportUrl: string;
```

- *Type:* string

URL of the support page for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application_registration#support_url ApplicationRegistration#support_url}

---

##### `termsOfServiceUrl`<sup>Optional</sup> <a name="termsOfServiceUrl" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.termsOfServiceUrl"></a>

```typescript
public readonly termsOfServiceUrl: string;
```

- *Type:* string

URL of the terms of service statement for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application_registration#terms_of_service_url ApplicationRegistration#terms_of_service_url}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationRegistrationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application_registration#timeouts ApplicationRegistration#timeouts}

---

### ApplicationRegistrationTimeouts <a name="ApplicationRegistrationTimeouts" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.Initializer"></a>

```typescript
import { applicationRegistration } from '@cdktf/provider-azuread'

const applicationRegistrationTimeouts: applicationRegistration.ApplicationRegistrationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application_registration#create ApplicationRegistration#create}. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application_registration#delete ApplicationRegistration#delete}. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application_registration#read ApplicationRegistration#read}. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application_registration#update ApplicationRegistration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application_registration#create ApplicationRegistration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application_registration#delete ApplicationRegistration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application_registration#read ApplicationRegistration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/application_registration#update ApplicationRegistration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationRegistrationTimeoutsOutputReference <a name="ApplicationRegistrationTimeoutsOutputReference" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.Initializer"></a>

```typescript
import { applicationRegistration } from '@cdktf/provider-azuread'

new applicationRegistration.ApplicationRegistrationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationRegistrationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a>

---



