# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-azuread.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-azuread.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user azuread_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.user.User.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-azuread'

new user.User(scope: Construct, id: string, config: UserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.user.UserConfig">UserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.user.User.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.user.User.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.user.User.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.user.UserConfig">UserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.User.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.user.User.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.user.User.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.user.User.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.user.User.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.user.User.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.user.User.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.user.User.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.user.User.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetAccountEnabled">resetAccountEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetAgeGroup">resetAgeGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetBusinessPhones">resetBusinessPhones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetCompanyName">resetCompanyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetConsentProvidedForMinor">resetConsentProvidedForMinor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetCostCenter">resetCostCenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetDepartment">resetDepartment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetDisablePasswordExpiration">resetDisablePasswordExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetDisableStrongPassword">resetDisableStrongPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetDivision">resetDivision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetEmployeeHireDate">resetEmployeeHireDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetEmployeeId">resetEmployeeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetEmployeeType">resetEmployeeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetFaxNumber">resetFaxNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetForcePasswordChange">resetForcePasswordChange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetGivenName">resetGivenName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetJobTitle">resetJobTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetMail">resetMail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetMailNickname">resetMailNickname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetManagerId">resetManagerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetMobilePhone">resetMobilePhone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetOfficeLocation">resetOfficeLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetOnpremisesImmutableId">resetOnpremisesImmutableId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetOtherMails">resetOtherMails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetPreferredLanguage">resetPreferredLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetShowInAddressList">resetShowInAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetStreetAddress">resetStreetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetSurname">resetSurname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetUsageLocation">resetUsageLocation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.user.User.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.user.User.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.user.User.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.user.User.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.user.User.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.user.User.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azuread.user.User.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.user.User.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.user.User.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azuread.user.User.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.user.User.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.user.User.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.user.User.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.user.User.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.user.User.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.user.User.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.user.User.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.user.User.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.user.User.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.user.User.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azuread.user.User.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azuread.user.User.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.user.User.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.user.User.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.user.User.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azuread.user.User.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.user.User.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azuread.user.User.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.user.User.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.user.User.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azuread.user.User.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.user.User.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.user.User.putTimeouts"></a>

```typescript
public putTimeouts(value: UserTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.user.User.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a>

---

##### `resetAccountEnabled` <a name="resetAccountEnabled" id="@cdktf/provider-azuread.user.User.resetAccountEnabled"></a>

```typescript
public resetAccountEnabled(): void
```

##### `resetAgeGroup` <a name="resetAgeGroup" id="@cdktf/provider-azuread.user.User.resetAgeGroup"></a>

```typescript
public resetAgeGroup(): void
```

##### `resetBusinessPhones` <a name="resetBusinessPhones" id="@cdktf/provider-azuread.user.User.resetBusinessPhones"></a>

```typescript
public resetBusinessPhones(): void
```

##### `resetCity` <a name="resetCity" id="@cdktf/provider-azuread.user.User.resetCity"></a>

```typescript
public resetCity(): void
```

##### `resetCompanyName` <a name="resetCompanyName" id="@cdktf/provider-azuread.user.User.resetCompanyName"></a>

```typescript
public resetCompanyName(): void
```

##### `resetConsentProvidedForMinor` <a name="resetConsentProvidedForMinor" id="@cdktf/provider-azuread.user.User.resetConsentProvidedForMinor"></a>

```typescript
public resetConsentProvidedForMinor(): void
```

##### `resetCostCenter` <a name="resetCostCenter" id="@cdktf/provider-azuread.user.User.resetCostCenter"></a>

```typescript
public resetCostCenter(): void
```

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-azuread.user.User.resetCountry"></a>

```typescript
public resetCountry(): void
```

##### `resetDepartment` <a name="resetDepartment" id="@cdktf/provider-azuread.user.User.resetDepartment"></a>

```typescript
public resetDepartment(): void
```

##### `resetDisablePasswordExpiration` <a name="resetDisablePasswordExpiration" id="@cdktf/provider-azuread.user.User.resetDisablePasswordExpiration"></a>

```typescript
public resetDisablePasswordExpiration(): void
```

##### `resetDisableStrongPassword` <a name="resetDisableStrongPassword" id="@cdktf/provider-azuread.user.User.resetDisableStrongPassword"></a>

```typescript
public resetDisableStrongPassword(): void
```

##### `resetDivision` <a name="resetDivision" id="@cdktf/provider-azuread.user.User.resetDivision"></a>

```typescript
public resetDivision(): void
```

##### `resetEmployeeHireDate` <a name="resetEmployeeHireDate" id="@cdktf/provider-azuread.user.User.resetEmployeeHireDate"></a>

```typescript
public resetEmployeeHireDate(): void
```

##### `resetEmployeeId` <a name="resetEmployeeId" id="@cdktf/provider-azuread.user.User.resetEmployeeId"></a>

```typescript
public resetEmployeeId(): void
```

##### `resetEmployeeType` <a name="resetEmployeeType" id="@cdktf/provider-azuread.user.User.resetEmployeeType"></a>

```typescript
public resetEmployeeType(): void
```

##### `resetFaxNumber` <a name="resetFaxNumber" id="@cdktf/provider-azuread.user.User.resetFaxNumber"></a>

```typescript
public resetFaxNumber(): void
```

##### `resetForcePasswordChange` <a name="resetForcePasswordChange" id="@cdktf/provider-azuread.user.User.resetForcePasswordChange"></a>

```typescript
public resetForcePasswordChange(): void
```

##### `resetGivenName` <a name="resetGivenName" id="@cdktf/provider-azuread.user.User.resetGivenName"></a>

```typescript
public resetGivenName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.user.User.resetId"></a>

```typescript
public resetId(): void
```

##### `resetJobTitle` <a name="resetJobTitle" id="@cdktf/provider-azuread.user.User.resetJobTitle"></a>

```typescript
public resetJobTitle(): void
```

##### `resetMail` <a name="resetMail" id="@cdktf/provider-azuread.user.User.resetMail"></a>

```typescript
public resetMail(): void
```

##### `resetMailNickname` <a name="resetMailNickname" id="@cdktf/provider-azuread.user.User.resetMailNickname"></a>

```typescript
public resetMailNickname(): void
```

##### `resetManagerId` <a name="resetManagerId" id="@cdktf/provider-azuread.user.User.resetManagerId"></a>

```typescript
public resetManagerId(): void
```

##### `resetMobilePhone` <a name="resetMobilePhone" id="@cdktf/provider-azuread.user.User.resetMobilePhone"></a>

```typescript
public resetMobilePhone(): void
```

##### `resetOfficeLocation` <a name="resetOfficeLocation" id="@cdktf/provider-azuread.user.User.resetOfficeLocation"></a>

```typescript
public resetOfficeLocation(): void
```

##### `resetOnpremisesImmutableId` <a name="resetOnpremisesImmutableId" id="@cdktf/provider-azuread.user.User.resetOnpremisesImmutableId"></a>

```typescript
public resetOnpremisesImmutableId(): void
```

##### `resetOtherMails` <a name="resetOtherMails" id="@cdktf/provider-azuread.user.User.resetOtherMails"></a>

```typescript
public resetOtherMails(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azuread.user.User.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-azuread.user.User.resetPostalCode"></a>

```typescript
public resetPostalCode(): void
```

##### `resetPreferredLanguage` <a name="resetPreferredLanguage" id="@cdktf/provider-azuread.user.User.resetPreferredLanguage"></a>

```typescript
public resetPreferredLanguage(): void
```

##### `resetShowInAddressList` <a name="resetShowInAddressList" id="@cdktf/provider-azuread.user.User.resetShowInAddressList"></a>

```typescript
public resetShowInAddressList(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-azuread.user.User.resetState"></a>

```typescript
public resetState(): void
```

##### `resetStreetAddress` <a name="resetStreetAddress" id="@cdktf/provider-azuread.user.User.resetStreetAddress"></a>

```typescript
public resetStreetAddress(): void
```

##### `resetSurname` <a name="resetSurname" id="@cdktf/provider-azuread.user.User.resetSurname"></a>

```typescript
public resetSurname(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.user.User.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUsageLocation` <a name="resetUsageLocation" id="@cdktf/provider-azuread.user.User.resetUsageLocation"></a>

```typescript
public resetUsageLocation(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.User.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.user.User.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.user.User.isConstruct"></a>

```typescript
import { user } from '@cdktf/provider-azuread'

user.User.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.user.User.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.user.User.isTerraformElement"></a>

```typescript
import { user } from '@cdktf/provider-azuread'

user.User.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.user.User.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.user.User.isTerraformResource"></a>

```typescript
import { user } from '@cdktf/provider-azuread'

user.User.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.user.User.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azuread.user.User.generateConfigForImport"></a>

```typescript
import { user } from '@cdktf/provider-azuread'

user.User.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.user.User.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.user.User.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the User to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.user.User.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing User that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.user.User.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the User to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.User.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.user.User.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.aboutMe">aboutMe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.creationType">creationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.externalUserState">externalUserState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.imAddresses">imAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesDistinguishedName">onpremisesDistinguishedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesDomainName">onpremisesDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesSamAccountName">onpremisesSamAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesSecurityIdentifier">onpremisesSecurityIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesSyncEnabled">onpremisesSyncEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesUserPrincipalName">onpremisesUserPrincipalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.proxyAddresses">proxyAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference">UserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.userType">userType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.accountEnabledInput">accountEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.ageGroupInput">ageGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.businessPhonesInput">businessPhonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.cityInput">cityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.companyNameInput">companyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.consentProvidedForMinorInput">consentProvidedForMinorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.costCenterInput">costCenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.countryInput">countryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.departmentInput">departmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.disablePasswordExpirationInput">disablePasswordExpirationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.disableStrongPasswordInput">disableStrongPasswordInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.divisionInput">divisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.employeeHireDateInput">employeeHireDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.employeeIdInput">employeeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.employeeTypeInput">employeeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.faxNumberInput">faxNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.forcePasswordChangeInput">forcePasswordChangeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.givenNameInput">givenNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.jobTitleInput">jobTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mailInput">mailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mailNicknameInput">mailNicknameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.managerIdInput">managerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mobilePhoneInput">mobilePhoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.officeLocationInput">officeLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesImmutableIdInput">onpremisesImmutableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.otherMailsInput">otherMailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.postalCodeInput">postalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.preferredLanguageInput">preferredLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.showInAddressListInput">showInAddressListInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.streetAddressInput">streetAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.surnameInput">surnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.usageLocationInput">usageLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.userPrincipalNameInput">userPrincipalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.accountEnabled">accountEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.ageGroup">ageGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.businessPhones">businessPhones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.companyName">companyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.consentProvidedForMinor">consentProvidedForMinor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.costCenter">costCenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.department">department</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.disablePasswordExpiration">disablePasswordExpiration</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.disableStrongPassword">disableStrongPassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.division">division</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.employeeHireDate">employeeHireDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.employeeId">employeeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.employeeType">employeeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.faxNumber">faxNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.forcePasswordChange">forcePasswordChange</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.givenName">givenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.jobTitle">jobTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mail">mail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mailNickname">mailNickname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.managerId">managerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mobilePhone">mobilePhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.officeLocation">officeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesImmutableId">onpremisesImmutableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.otherMails">otherMails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.preferredLanguage">preferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.showInAddressList">showInAddressList</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.streetAddress">streetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.surname">surname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.usageLocation">usageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.userPrincipalName">userPrincipalName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.user.User.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.user.User.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.user.User.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.user.User.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.user.User.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.user.User.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.user.User.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.user.User.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.user.User.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.user.User.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.user.User.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.user.User.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.user.User.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.user.User.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aboutMe`<sup>Required</sup> <a name="aboutMe" id="@cdktf/provider-azuread.user.User.property.aboutMe"></a>

```typescript
public readonly aboutMe: string;
```

- *Type:* string

---

##### `creationType`<sup>Required</sup> <a name="creationType" id="@cdktf/provider-azuread.user.User.property.creationType"></a>

```typescript
public readonly creationType: string;
```

- *Type:* string

---

##### `externalUserState`<sup>Required</sup> <a name="externalUserState" id="@cdktf/provider-azuread.user.User.property.externalUserState"></a>

```typescript
public readonly externalUserState: string;
```

- *Type:* string

---

##### `imAddresses`<sup>Required</sup> <a name="imAddresses" id="@cdktf/provider-azuread.user.User.property.imAddresses"></a>

```typescript
public readonly imAddresses: string[];
```

- *Type:* string[]

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azuread.user.User.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `onpremisesDistinguishedName`<sup>Required</sup> <a name="onpremisesDistinguishedName" id="@cdktf/provider-azuread.user.User.property.onpremisesDistinguishedName"></a>

```typescript
public readonly onpremisesDistinguishedName: string;
```

- *Type:* string

---

##### `onpremisesDomainName`<sup>Required</sup> <a name="onpremisesDomainName" id="@cdktf/provider-azuread.user.User.property.onpremisesDomainName"></a>

```typescript
public readonly onpremisesDomainName: string;
```

- *Type:* string

---

##### `onpremisesSamAccountName`<sup>Required</sup> <a name="onpremisesSamAccountName" id="@cdktf/provider-azuread.user.User.property.onpremisesSamAccountName"></a>

```typescript
public readonly onpremisesSamAccountName: string;
```

- *Type:* string

---

##### `onpremisesSecurityIdentifier`<sup>Required</sup> <a name="onpremisesSecurityIdentifier" id="@cdktf/provider-azuread.user.User.property.onpremisesSecurityIdentifier"></a>

```typescript
public readonly onpremisesSecurityIdentifier: string;
```

- *Type:* string

---

##### `onpremisesSyncEnabled`<sup>Required</sup> <a name="onpremisesSyncEnabled" id="@cdktf/provider-azuread.user.User.property.onpremisesSyncEnabled"></a>

```typescript
public readonly onpremisesSyncEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `onpremisesUserPrincipalName`<sup>Required</sup> <a name="onpremisesUserPrincipalName" id="@cdktf/provider-azuread.user.User.property.onpremisesUserPrincipalName"></a>

```typescript
public readonly onpremisesUserPrincipalName: string;
```

- *Type:* string

---

##### `proxyAddresses`<sup>Required</sup> <a name="proxyAddresses" id="@cdktf/provider-azuread.user.User.property.proxyAddresses"></a>

```typescript
public readonly proxyAddresses: string[];
```

- *Type:* string[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.user.User.property.timeouts"></a>

```typescript
public readonly timeouts: UserTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference">UserTimeoutsOutputReference</a>

---

##### `userType`<sup>Required</sup> <a name="userType" id="@cdktf/provider-azuread.user.User.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* string

---

##### `accountEnabledInput`<sup>Optional</sup> <a name="accountEnabledInput" id="@cdktf/provider-azuread.user.User.property.accountEnabledInput"></a>

```typescript
public readonly accountEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ageGroupInput`<sup>Optional</sup> <a name="ageGroupInput" id="@cdktf/provider-azuread.user.User.property.ageGroupInput"></a>

```typescript
public readonly ageGroupInput: string;
```

- *Type:* string

---

##### `businessPhonesInput`<sup>Optional</sup> <a name="businessPhonesInput" id="@cdktf/provider-azuread.user.User.property.businessPhonesInput"></a>

```typescript
public readonly businessPhonesInput: string[];
```

- *Type:* string[]

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-azuread.user.User.property.cityInput"></a>

```typescript
public readonly cityInput: string;
```

- *Type:* string

---

##### `companyNameInput`<sup>Optional</sup> <a name="companyNameInput" id="@cdktf/provider-azuread.user.User.property.companyNameInput"></a>

```typescript
public readonly companyNameInput: string;
```

- *Type:* string

---

##### `consentProvidedForMinorInput`<sup>Optional</sup> <a name="consentProvidedForMinorInput" id="@cdktf/provider-azuread.user.User.property.consentProvidedForMinorInput"></a>

```typescript
public readonly consentProvidedForMinorInput: string;
```

- *Type:* string

---

##### `costCenterInput`<sup>Optional</sup> <a name="costCenterInput" id="@cdktf/provider-azuread.user.User.property.costCenterInput"></a>

```typescript
public readonly costCenterInput: string;
```

- *Type:* string

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-azuread.user.User.property.countryInput"></a>

```typescript
public readonly countryInput: string;
```

- *Type:* string

---

##### `departmentInput`<sup>Optional</sup> <a name="departmentInput" id="@cdktf/provider-azuread.user.User.property.departmentInput"></a>

```typescript
public readonly departmentInput: string;
```

- *Type:* string

---

##### `disablePasswordExpirationInput`<sup>Optional</sup> <a name="disablePasswordExpirationInput" id="@cdktf/provider-azuread.user.User.property.disablePasswordExpirationInput"></a>

```typescript
public readonly disablePasswordExpirationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableStrongPasswordInput`<sup>Optional</sup> <a name="disableStrongPasswordInput" id="@cdktf/provider-azuread.user.User.property.disableStrongPasswordInput"></a>

```typescript
public readonly disableStrongPasswordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azuread.user.User.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `divisionInput`<sup>Optional</sup> <a name="divisionInput" id="@cdktf/provider-azuread.user.User.property.divisionInput"></a>

```typescript
public readonly divisionInput: string;
```

- *Type:* string

---

##### `employeeHireDateInput`<sup>Optional</sup> <a name="employeeHireDateInput" id="@cdktf/provider-azuread.user.User.property.employeeHireDateInput"></a>

```typescript
public readonly employeeHireDateInput: string;
```

- *Type:* string

---

##### `employeeIdInput`<sup>Optional</sup> <a name="employeeIdInput" id="@cdktf/provider-azuread.user.User.property.employeeIdInput"></a>

```typescript
public readonly employeeIdInput: string;
```

- *Type:* string

---

##### `employeeTypeInput`<sup>Optional</sup> <a name="employeeTypeInput" id="@cdktf/provider-azuread.user.User.property.employeeTypeInput"></a>

```typescript
public readonly employeeTypeInput: string;
```

- *Type:* string

---

##### `faxNumberInput`<sup>Optional</sup> <a name="faxNumberInput" id="@cdktf/provider-azuread.user.User.property.faxNumberInput"></a>

```typescript
public readonly faxNumberInput: string;
```

- *Type:* string

---

##### `forcePasswordChangeInput`<sup>Optional</sup> <a name="forcePasswordChangeInput" id="@cdktf/provider-azuread.user.User.property.forcePasswordChangeInput"></a>

```typescript
public readonly forcePasswordChangeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `givenNameInput`<sup>Optional</sup> <a name="givenNameInput" id="@cdktf/provider-azuread.user.User.property.givenNameInput"></a>

```typescript
public readonly givenNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.user.User.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `jobTitleInput`<sup>Optional</sup> <a name="jobTitleInput" id="@cdktf/provider-azuread.user.User.property.jobTitleInput"></a>

```typescript
public readonly jobTitleInput: string;
```

- *Type:* string

---

##### `mailInput`<sup>Optional</sup> <a name="mailInput" id="@cdktf/provider-azuread.user.User.property.mailInput"></a>

```typescript
public readonly mailInput: string;
```

- *Type:* string

---

##### `mailNicknameInput`<sup>Optional</sup> <a name="mailNicknameInput" id="@cdktf/provider-azuread.user.User.property.mailNicknameInput"></a>

```typescript
public readonly mailNicknameInput: string;
```

- *Type:* string

---

##### `managerIdInput`<sup>Optional</sup> <a name="managerIdInput" id="@cdktf/provider-azuread.user.User.property.managerIdInput"></a>

```typescript
public readonly managerIdInput: string;
```

- *Type:* string

---

##### `mobilePhoneInput`<sup>Optional</sup> <a name="mobilePhoneInput" id="@cdktf/provider-azuread.user.User.property.mobilePhoneInput"></a>

```typescript
public readonly mobilePhoneInput: string;
```

- *Type:* string

---

##### `officeLocationInput`<sup>Optional</sup> <a name="officeLocationInput" id="@cdktf/provider-azuread.user.User.property.officeLocationInput"></a>

```typescript
public readonly officeLocationInput: string;
```

- *Type:* string

---

##### `onpremisesImmutableIdInput`<sup>Optional</sup> <a name="onpremisesImmutableIdInput" id="@cdktf/provider-azuread.user.User.property.onpremisesImmutableIdInput"></a>

```typescript
public readonly onpremisesImmutableIdInput: string;
```

- *Type:* string

---

##### `otherMailsInput`<sup>Optional</sup> <a name="otherMailsInput" id="@cdktf/provider-azuread.user.User.property.otherMailsInput"></a>

```typescript
public readonly otherMailsInput: string[];
```

- *Type:* string[]

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azuread.user.User.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-azuread.user.User.property.postalCodeInput"></a>

```typescript
public readonly postalCodeInput: string;
```

- *Type:* string

---

##### `preferredLanguageInput`<sup>Optional</sup> <a name="preferredLanguageInput" id="@cdktf/provider-azuread.user.User.property.preferredLanguageInput"></a>

```typescript
public readonly preferredLanguageInput: string;
```

- *Type:* string

---

##### `showInAddressListInput`<sup>Optional</sup> <a name="showInAddressListInput" id="@cdktf/provider-azuread.user.User.property.showInAddressListInput"></a>

```typescript
public readonly showInAddressListInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-azuread.user.User.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `streetAddressInput`<sup>Optional</sup> <a name="streetAddressInput" id="@cdktf/provider-azuread.user.User.property.streetAddressInput"></a>

```typescript
public readonly streetAddressInput: string;
```

- *Type:* string

---

##### `surnameInput`<sup>Optional</sup> <a name="surnameInput" id="@cdktf/provider-azuread.user.User.property.surnameInput"></a>

```typescript
public readonly surnameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.user.User.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | UserTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a>

---

##### `usageLocationInput`<sup>Optional</sup> <a name="usageLocationInput" id="@cdktf/provider-azuread.user.User.property.usageLocationInput"></a>

```typescript
public readonly usageLocationInput: string;
```

- *Type:* string

---

##### `userPrincipalNameInput`<sup>Optional</sup> <a name="userPrincipalNameInput" id="@cdktf/provider-azuread.user.User.property.userPrincipalNameInput"></a>

```typescript
public readonly userPrincipalNameInput: string;
```

- *Type:* string

---

##### `accountEnabled`<sup>Required</sup> <a name="accountEnabled" id="@cdktf/provider-azuread.user.User.property.accountEnabled"></a>

```typescript
public readonly accountEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ageGroup`<sup>Required</sup> <a name="ageGroup" id="@cdktf/provider-azuread.user.User.property.ageGroup"></a>

```typescript
public readonly ageGroup: string;
```

- *Type:* string

---

##### `businessPhones`<sup>Required</sup> <a name="businessPhones" id="@cdktf/provider-azuread.user.User.property.businessPhones"></a>

```typescript
public readonly businessPhones: string[];
```

- *Type:* string[]

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-azuread.user.User.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="@cdktf/provider-azuread.user.User.property.companyName"></a>

```typescript
public readonly companyName: string;
```

- *Type:* string

---

##### `consentProvidedForMinor`<sup>Required</sup> <a name="consentProvidedForMinor" id="@cdktf/provider-azuread.user.User.property.consentProvidedForMinor"></a>

```typescript
public readonly consentProvidedForMinor: string;
```

- *Type:* string

---

##### `costCenter`<sup>Required</sup> <a name="costCenter" id="@cdktf/provider-azuread.user.User.property.costCenter"></a>

```typescript
public readonly costCenter: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-azuread.user.User.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `department`<sup>Required</sup> <a name="department" id="@cdktf/provider-azuread.user.User.property.department"></a>

```typescript
public readonly department: string;
```

- *Type:* string

---

##### `disablePasswordExpiration`<sup>Required</sup> <a name="disablePasswordExpiration" id="@cdktf/provider-azuread.user.User.property.disablePasswordExpiration"></a>

```typescript
public readonly disablePasswordExpiration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableStrongPassword`<sup>Required</sup> <a name="disableStrongPassword" id="@cdktf/provider-azuread.user.User.property.disableStrongPassword"></a>

```typescript
public readonly disableStrongPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.user.User.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `division`<sup>Required</sup> <a name="division" id="@cdktf/provider-azuread.user.User.property.division"></a>

```typescript
public readonly division: string;
```

- *Type:* string

---

##### `employeeHireDate`<sup>Required</sup> <a name="employeeHireDate" id="@cdktf/provider-azuread.user.User.property.employeeHireDate"></a>

```typescript
public readonly employeeHireDate: string;
```

- *Type:* string

---

##### `employeeId`<sup>Required</sup> <a name="employeeId" id="@cdktf/provider-azuread.user.User.property.employeeId"></a>

```typescript
public readonly employeeId: string;
```

- *Type:* string

---

##### `employeeType`<sup>Required</sup> <a name="employeeType" id="@cdktf/provider-azuread.user.User.property.employeeType"></a>

```typescript
public readonly employeeType: string;
```

- *Type:* string

---

##### `faxNumber`<sup>Required</sup> <a name="faxNumber" id="@cdktf/provider-azuread.user.User.property.faxNumber"></a>

```typescript
public readonly faxNumber: string;
```

- *Type:* string

---

##### `forcePasswordChange`<sup>Required</sup> <a name="forcePasswordChange" id="@cdktf/provider-azuread.user.User.property.forcePasswordChange"></a>

```typescript
public readonly forcePasswordChange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="@cdktf/provider-azuread.user.User.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.user.User.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jobTitle`<sup>Required</sup> <a name="jobTitle" id="@cdktf/provider-azuread.user.User.property.jobTitle"></a>

```typescript
public readonly jobTitle: string;
```

- *Type:* string

---

##### `mail`<sup>Required</sup> <a name="mail" id="@cdktf/provider-azuread.user.User.property.mail"></a>

```typescript
public readonly mail: string;
```

- *Type:* string

---

##### `mailNickname`<sup>Required</sup> <a name="mailNickname" id="@cdktf/provider-azuread.user.User.property.mailNickname"></a>

```typescript
public readonly mailNickname: string;
```

- *Type:* string

---

##### `managerId`<sup>Required</sup> <a name="managerId" id="@cdktf/provider-azuread.user.User.property.managerId"></a>

```typescript
public readonly managerId: string;
```

- *Type:* string

---

##### `mobilePhone`<sup>Required</sup> <a name="mobilePhone" id="@cdktf/provider-azuread.user.User.property.mobilePhone"></a>

```typescript
public readonly mobilePhone: string;
```

- *Type:* string

---

##### `officeLocation`<sup>Required</sup> <a name="officeLocation" id="@cdktf/provider-azuread.user.User.property.officeLocation"></a>

```typescript
public readonly officeLocation: string;
```

- *Type:* string

---

##### `onpremisesImmutableId`<sup>Required</sup> <a name="onpremisesImmutableId" id="@cdktf/provider-azuread.user.User.property.onpremisesImmutableId"></a>

```typescript
public readonly onpremisesImmutableId: string;
```

- *Type:* string

---

##### `otherMails`<sup>Required</sup> <a name="otherMails" id="@cdktf/provider-azuread.user.User.property.otherMails"></a>

```typescript
public readonly otherMails: string[];
```

- *Type:* string[]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azuread.user.User.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-azuread.user.User.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `preferredLanguage`<sup>Required</sup> <a name="preferredLanguage" id="@cdktf/provider-azuread.user.User.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* string

---

##### `showInAddressList`<sup>Required</sup> <a name="showInAddressList" id="@cdktf/provider-azuread.user.User.property.showInAddressList"></a>

```typescript
public readonly showInAddressList: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-azuread.user.User.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktf/provider-azuread.user.User.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* string

---

##### `surname`<sup>Required</sup> <a name="surname" id="@cdktf/provider-azuread.user.User.property.surname"></a>

```typescript
public readonly surname: string;
```

- *Type:* string

---

##### `usageLocation`<sup>Required</sup> <a name="usageLocation" id="@cdktf/provider-azuread.user.User.property.usageLocation"></a>

```typescript
public readonly usageLocation: string;
```

- *Type:* string

---

##### `userPrincipalName`<sup>Required</sup> <a name="userPrincipalName" id="@cdktf/provider-azuread.user.User.property.userPrincipalName"></a>

```typescript
public readonly userPrincipalName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.User.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.user.User.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="@cdktf/provider-azuread.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.user.UserConfig.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-azuread'

const userConfig: user.UserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.displayName">displayName</a></code> | <code>string</code> | The name to display in the address book for the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.userPrincipalName">userPrincipalName</a></code> | <code>string</code> | The user principal name (UPN) of the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.accountEnabled">accountEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not the account should be enabled. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.ageGroup">ageGroup</a></code> | <code>string</code> | The age group of the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.businessPhones">businessPhones</a></code> | <code>string[]</code> | The telephone numbers for the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.city">city</a></code> | <code>string</code> | The city in which the user is located. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.companyName">companyName</a></code> | <code>string</code> | The company name which the user is associated. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.consentProvidedForMinor">consentProvidedForMinor</a></code> | <code>string</code> | Whether consent has been obtained for minors. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.costCenter">costCenter</a></code> | <code>string</code> | The cost center associated with the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.country">country</a></code> | <code>string</code> | The country/region in which the user is located, e.g. `US` or `UK`. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.department">department</a></code> | <code>string</code> | The name for the department in which the user works. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.disablePasswordExpiration">disablePasswordExpiration</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the users password is exempt from expiring. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.disableStrongPassword">disableStrongPassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the user is allowed weaker passwords than the default policy to be specified. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.division">division</a></code> | <code>string</code> | The name of the division in which the user works. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.employeeHireDate">employeeHireDate</a></code> | <code>string</code> | The hire date of the user, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.employeeId">employeeId</a></code> | <code>string</code> | The employee identifier assigned to the user by the organisation. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.employeeType">employeeType</a></code> | <code>string</code> | Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.faxNumber">faxNumber</a></code> | <code>string</code> | The fax number of the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.forcePasswordChange">forcePasswordChange</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the user is forced to change the password during the next sign-in. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.givenName">givenName</a></code> | <code>string</code> | The given name (first name) of the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.jobTitle">jobTitle</a></code> | <code>string</code> | The user’s job title. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.mail">mail</a></code> | <code>string</code> | The SMTP address for the user. Cannot be unset. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.mailNickname">mailNickname</a></code> | <code>string</code> | The mail alias for the user. Defaults to the user name part of the user principal name (UPN). |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.managerId">managerId</a></code> | <code>string</code> | The object ID of the user's manager. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.mobilePhone">mobilePhone</a></code> | <code>string</code> | The primary cellular telephone number for the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.officeLocation">officeLocation</a></code> | <code>string</code> | The office location in the user's place of business. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.onpremisesImmutableId">onpremisesImmutableId</a></code> | <code>string</code> | The value used to associate an on-premise Active Directory user account with their Azure AD user object. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.otherMails">otherMails</a></code> | <code>string[]</code> | Additional email addresses for the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.password">password</a></code> | <code>string</code> | The password for the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.postalCode">postalCode</a></code> | <code>string</code> | The postal code for the user's postal address. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.preferredLanguage">preferredLanguage</a></code> | <code>string</code> | The user's preferred language, in ISO 639-1 notation. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.showInAddressList">showInAddressList</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not the Outlook global address list should include this user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.state">state</a></code> | <code>string</code> | The state or province in the user's address. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.streetAddress">streetAddress</a></code> | <code>string</code> | The street address of the user's place of business. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.surname">surname</a></code> | <code>string</code> | The user's surname (family name or last name). |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.usageLocation">usageLocation</a></code> | <code>string</code> | The usage location of the user. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.user.UserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.user.UserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.user.UserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.user.UserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.user.UserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.user.UserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.user.UserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.user.UserConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The name to display in the address book for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#display_name User#display_name}

---

##### `userPrincipalName`<sup>Required</sup> <a name="userPrincipalName" id="@cdktf/provider-azuread.user.UserConfig.property.userPrincipalName"></a>

```typescript
public readonly userPrincipalName: string;
```

- *Type:* string

The user principal name (UPN) of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#user_principal_name User#user_principal_name}

---

##### `accountEnabled`<sup>Optional</sup> <a name="accountEnabled" id="@cdktf/provider-azuread.user.UserConfig.property.accountEnabled"></a>

```typescript
public readonly accountEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not the account should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#account_enabled User#account_enabled}

---

##### `ageGroup`<sup>Optional</sup> <a name="ageGroup" id="@cdktf/provider-azuread.user.UserConfig.property.ageGroup"></a>

```typescript
public readonly ageGroup: string;
```

- *Type:* string

The age group of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#age_group User#age_group}

---

##### `businessPhones`<sup>Optional</sup> <a name="businessPhones" id="@cdktf/provider-azuread.user.UserConfig.property.businessPhones"></a>

```typescript
public readonly businessPhones: string[];
```

- *Type:* string[]

The telephone numbers for the user.

Only one number can be set for this property. Read-only for users synced with Azure AD Connect

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#business_phones User#business_phones}

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-azuread.user.UserConfig.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

The city in which the user is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#city User#city}

---

##### `companyName`<sup>Optional</sup> <a name="companyName" id="@cdktf/provider-azuread.user.UserConfig.property.companyName"></a>

```typescript
public readonly companyName: string;
```

- *Type:* string

The company name which the user is associated.

This property can be useful for describing the company that an external user comes from

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#company_name User#company_name}

---

##### `consentProvidedForMinor`<sup>Optional</sup> <a name="consentProvidedForMinor" id="@cdktf/provider-azuread.user.UserConfig.property.consentProvidedForMinor"></a>

```typescript
public readonly consentProvidedForMinor: string;
```

- *Type:* string

Whether consent has been obtained for minors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#consent_provided_for_minor User#consent_provided_for_minor}

---

##### `costCenter`<sup>Optional</sup> <a name="costCenter" id="@cdktf/provider-azuread.user.UserConfig.property.costCenter"></a>

```typescript
public readonly costCenter: string;
```

- *Type:* string

The cost center associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#cost_center User#cost_center}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-azuread.user.UserConfig.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

The country/region in which the user is located, e.g. `US` or `UK`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#country User#country}

---

##### `department`<sup>Optional</sup> <a name="department" id="@cdktf/provider-azuread.user.UserConfig.property.department"></a>

```typescript
public readonly department: string;
```

- *Type:* string

The name for the department in which the user works.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#department User#department}

---

##### `disablePasswordExpiration`<sup>Optional</sup> <a name="disablePasswordExpiration" id="@cdktf/provider-azuread.user.UserConfig.property.disablePasswordExpiration"></a>

```typescript
public readonly disablePasswordExpiration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the users password is exempt from expiring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#disable_password_expiration User#disable_password_expiration}

---

##### `disableStrongPassword`<sup>Optional</sup> <a name="disableStrongPassword" id="@cdktf/provider-azuread.user.UserConfig.property.disableStrongPassword"></a>

```typescript
public readonly disableStrongPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the user is allowed weaker passwords than the default policy to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#disable_strong_password User#disable_strong_password}

---

##### `division`<sup>Optional</sup> <a name="division" id="@cdktf/provider-azuread.user.UserConfig.property.division"></a>

```typescript
public readonly division: string;
```

- *Type:* string

The name of the division in which the user works.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#division User#division}

---

##### `employeeHireDate`<sup>Optional</sup> <a name="employeeHireDate" id="@cdktf/provider-azuread.user.UserConfig.property.employeeHireDate"></a>

```typescript
public readonly employeeHireDate: string;
```

- *Type:* string

The hire date of the user, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#employee_hire_date User#employee_hire_date}

---

##### `employeeId`<sup>Optional</sup> <a name="employeeId" id="@cdktf/provider-azuread.user.UserConfig.property.employeeId"></a>

```typescript
public readonly employeeId: string;
```

- *Type:* string

The employee identifier assigned to the user by the organisation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#employee_id User#employee_id}

---

##### `employeeType`<sup>Optional</sup> <a name="employeeType" id="@cdktf/provider-azuread.user.UserConfig.property.employeeType"></a>

```typescript
public readonly employeeType: string;
```

- *Type:* string

Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#employee_type User#employee_type}

---

##### `faxNumber`<sup>Optional</sup> <a name="faxNumber" id="@cdktf/provider-azuread.user.UserConfig.property.faxNumber"></a>

```typescript
public readonly faxNumber: string;
```

- *Type:* string

The fax number of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#fax_number User#fax_number}

---

##### `forcePasswordChange`<sup>Optional</sup> <a name="forcePasswordChange" id="@cdktf/provider-azuread.user.UserConfig.property.forcePasswordChange"></a>

```typescript
public readonly forcePasswordChange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the user is forced to change the password during the next sign-in.

Only takes effect when also changing the password

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#force_password_change User#force_password_change}

---

##### `givenName`<sup>Optional</sup> <a name="givenName" id="@cdktf/provider-azuread.user.UserConfig.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

The given name (first name) of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#given_name User#given_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.user.UserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jobTitle`<sup>Optional</sup> <a name="jobTitle" id="@cdktf/provider-azuread.user.UserConfig.property.jobTitle"></a>

```typescript
public readonly jobTitle: string;
```

- *Type:* string

The user’s job title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#job_title User#job_title}

---

##### `mail`<sup>Optional</sup> <a name="mail" id="@cdktf/provider-azuread.user.UserConfig.property.mail"></a>

```typescript
public readonly mail: string;
```

- *Type:* string

The SMTP address for the user. Cannot be unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#mail User#mail}

---

##### `mailNickname`<sup>Optional</sup> <a name="mailNickname" id="@cdktf/provider-azuread.user.UserConfig.property.mailNickname"></a>

```typescript
public readonly mailNickname: string;
```

- *Type:* string

The mail alias for the user. Defaults to the user name part of the user principal name (UPN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#mail_nickname User#mail_nickname}

---

##### `managerId`<sup>Optional</sup> <a name="managerId" id="@cdktf/provider-azuread.user.UserConfig.property.managerId"></a>

```typescript
public readonly managerId: string;
```

- *Type:* string

The object ID of the user's manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#manager_id User#manager_id}

---

##### `mobilePhone`<sup>Optional</sup> <a name="mobilePhone" id="@cdktf/provider-azuread.user.UserConfig.property.mobilePhone"></a>

```typescript
public readonly mobilePhone: string;
```

- *Type:* string

The primary cellular telephone number for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#mobile_phone User#mobile_phone}

---

##### `officeLocation`<sup>Optional</sup> <a name="officeLocation" id="@cdktf/provider-azuread.user.UserConfig.property.officeLocation"></a>

```typescript
public readonly officeLocation: string;
```

- *Type:* string

The office location in the user's place of business.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#office_location User#office_location}

---

##### `onpremisesImmutableId`<sup>Optional</sup> <a name="onpremisesImmutableId" id="@cdktf/provider-azuread.user.UserConfig.property.onpremisesImmutableId"></a>

```typescript
public readonly onpremisesImmutableId: string;
```

- *Type:* string

The value used to associate an on-premise Active Directory user account with their Azure AD user object.

This must be specified if you are using a federated domain for the user's `user_principal_name` property when creating a new user account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#onpremises_immutable_id User#onpremises_immutable_id}

---

##### `otherMails`<sup>Optional</sup> <a name="otherMails" id="@cdktf/provider-azuread.user.UserConfig.property.otherMails"></a>

```typescript
public readonly otherMails: string[];
```

- *Type:* string[]

Additional email addresses for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#other_mails User#other_mails}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azuread.user.UserConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password for the user.

The password must satisfy minimum requirements as specified by the password policy. The maximum length is 256 characters. This property is required when creating a new user

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#password User#password}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-azuread.user.UserConfig.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

The postal code for the user's postal address.

The postal code is specific to the user's country/region. In the United States of America, this attribute contains the ZIP code

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#postal_code User#postal_code}

---

##### `preferredLanguage`<sup>Optional</sup> <a name="preferredLanguage" id="@cdktf/provider-azuread.user.UserConfig.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* string

The user's preferred language, in ISO 639-1 notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#preferred_language User#preferred_language}

---

##### `showInAddressList`<sup>Optional</sup> <a name="showInAddressList" id="@cdktf/provider-azuread.user.UserConfig.property.showInAddressList"></a>

```typescript
public readonly showInAddressList: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not the Outlook global address list should include this user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#show_in_address_list User#show_in_address_list}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-azuread.user.UserConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

The state or province in the user's address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#state User#state}

---

##### `streetAddress`<sup>Optional</sup> <a name="streetAddress" id="@cdktf/provider-azuread.user.UserConfig.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* string

The street address of the user's place of business.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#street_address User#street_address}

---

##### `surname`<sup>Optional</sup> <a name="surname" id="@cdktf/provider-azuread.user.UserConfig.property.surname"></a>

```typescript
public readonly surname: string;
```

- *Type:* string

The user's surname (family name or last name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#surname User#surname}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.user.UserConfig.property.timeouts"></a>

```typescript
public readonly timeouts: UserTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#timeouts User#timeouts}

---

##### `usageLocation`<sup>Optional</sup> <a name="usageLocation" id="@cdktf/provider-azuread.user.UserConfig.property.usageLocation"></a>

```typescript
public readonly usageLocation: string;
```

- *Type:* string

The usage location of the user.

Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries. The usage location is a two letter country code (ISO standard 3166). Examples include: `NO`, `JP`, and `GB`. Cannot be reset to null once set

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#usage_location User#usage_location}

---

### UserTimeouts <a name="UserTimeouts" id="@cdktf/provider-azuread.user.UserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.user.UserTimeouts.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-azuread'

const userTimeouts: user.UserTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#create User#create}. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#delete User#delete}. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#read User#read}. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#update User#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.user.UserTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#create User#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.user.UserTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#delete User#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.user.UserTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#read User#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.user.UserTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/user#update User#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### UserTimeoutsOutputReference <a name="UserTimeoutsOutputReference" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-azuread'

new user.UserTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a>

---



