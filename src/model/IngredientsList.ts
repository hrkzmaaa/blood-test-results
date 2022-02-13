interface Ingredient {
    value: number
    name: string
    calc(): boolean
}
/**
 * LDLコレステロール
 */
export class LdlCholesterol implements Ingredient {
    value = 0
    name = 'LDLコレステロール'

    calc(): boolean {
        if (this.value <= 119 || this.value >= 70) {
            return true
        } else {
            return false
        }
    }
}
/**
 * HDLコレステロール
 */
export class HdlCholesterol implements Ingredient {
    value = 0
    name = 'HDLコレステロール'

    calc(): boolean {
        if (this.value >= 70) {
            return true
        } else {
            return false
        }
    }
}
/**
 * 総コレステロール
 */
export class TotalCholesterol implements Ingredient {
    value = 0
    name = '総コレステロール'

    calc(): boolean {
        if (this.value >= 130 || this.value <= 219) {
            return true
        } else {
            return false
        }
    }
}
/**
 * 最高血圧
 */
export class MaximumBloodPressure implements Ingredient {
    value = 0
    name = '最高血圧'

    calc(): boolean {
        if (this.value <= 120) {
            return true
        } else {
            return false
        }
    }
}
/**
 * 最低血圧
 */
export class MinimumBloodPressure implements Ingredient {
    value = 0
    name = '最低血圧'

    calc(): boolean {
        if (this.value <= 80) {
            return true
        } else {
            return false
        }
    }
}