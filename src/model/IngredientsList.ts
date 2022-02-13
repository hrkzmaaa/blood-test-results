interface Ingredient {
    value: number
    name: string
    calc(): 'Upper' | 'Lower' | 'Standard'
}
/**
 * LDLコレステロール
 */
export class LdlCholesterol implements Ingredient {
    value = 0
    name = 'LDLコレステロール'

    calc() {
        if (this.value > 119) {
            return 'Upper'
        } else if (this.value < 70) {
            return 'Lower'
        } else {
            return 'Standard'
        }
    }
}
/**
 * HDLコレステロール
 */
export class HdlCholesterol implements Ingredient {
    value = 0
    name = 'HDLコレステロール'

    calc() {
        if (this.value < 40) {
            return 'Lower'
        } else {
            return 'Standard'
        }
    }

}
/**
 * 総コレステロール
 */
export class TotalCholesterol implements Ingredient {
    value = 0
    name = '総コレステロール'

    calc() {
        if (this.value > 219) {
            return 'Upper'
        } else if (this.value < 130) {
            return 'Lower'
        } else {
            return 'Standard'
        }
    }
}
/**
 * 最高血圧
 */
export class MaximumBloodPressure implements Ingredient {
    value = 0
    name = '最高血圧'

    calc() {
        if (this.value > 120) {
            return 'Upper'
        } else {
            return 'Standard'
        }
    }
}
/**
 * 最低血圧
 */
export class MinimumBloodPressure implements Ingredient {
    value = 0
    name = '最低血圧'

    calc() {
        if (this.value > 80) {
            return 'Upper'
        } else {
            return 'Standard'
        }
    }
}