function Submission({ onPress }) {
    return (
        
        <View>
            <CompButton 
                title="Cancel"
                onPress={onCancel}
            />
            <CompButton 
                title="Save"
                onPress={onSave}
            />
        </View>
    );
}

expo